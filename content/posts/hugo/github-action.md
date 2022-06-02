---
title: "用Github Action自动部署Hugo博客Public页面"
date: 2022-03-26T0:33:00+08:00
# lastmod: 2022-01-09T16:39:00+08:00
draft: false
showToc: true
tags: ["Hugo","部署"]
---
在知道Github Action之前，我甚至没有托管我的博客源码，导致有些时候代码改乱了，也没有后悔药可以吃。在折腾[J小将的博客](https://www.janew.tk/)的时候，实现了用Github Action部署Hugo博客，即，只需要push一次源码，然后自动生成静态文件到静态分支。

于是开始折腾自己的博客：开始把源码放到一个仓库（设为私密），公开的静态码放另一个仓库，每次只需要更新源码仓库即可。

写此帖记录一下处理步骤。  

参考了一下两位的文章，非常有帮助：  

https://zhuanlan.zhihu.com/p/403221054  
https://dwye.dev/post/hugo-github-action/   

## 简单描述一下步骤
首先需要在本地文件博客根目录创建`/.github/workflows/gh-pages.yml`，写一些配置。还需要生成一对SSH密钥来进行Github配对，分别是Secrey Key和Public Key，分别放在源码仓库和静态仓库的配置中。  

## Hugo
我这里是一个仓库`nicopcat/Hugo-Sources`存放源码，一个仓库`nicopcat/nicopcat.github.io`存放静态文件，主分支都是 main，有submodule，非extended版本。  

## 生成SSH密钥
1. 检查是否已经生成过SSH  
    查找路径`C:\Users\root\.ssh`，里面有两个文件，一个是.pub格式，放的是可以公开的公钥（Public Key），另一个则是没有格式的密钥（Secret Key），不要与人分享。  

2. 也许你已经生成过密钥并由于种种原因放在了 `Github` - `settings` - `SSH and GPG keys` 里：  
![ssh-key-settings](https://i.bmp.ovh/imgs/2022/03/30/050d3ec215339775.png)
如果有，可能需要删除，不然会与接下来的配置冲突。  

3. 如果之前没有生成过密钥，则输入以下指令：
    ```
    ssh-keygen -t rsa - -C "$(git config user.email)"
    ```

4. 在源码仓库，比如我的仓库`nicopcat/Hugo-Sources`下：
    - 找到 `Settings` - `Secrets` - `Action`
    - 看到Secret，就知道是要放密钥（Secret Key）  
    - 点 `New repository secret` ，新增密钥，将`.ssh/`里的密钥全部拷贝进来，内容以`-----BEGIN OPENSSH PRIVATE KEY-----`开头
    - 名字必须与下面github action workflows文件中的吻合，比如我的是`ACTIONS_DEPLOY_KEY`
![secret-key](https://i.bmp.ovh/imgs/2022/03/30/7e2f1ac6d996c67c.png)


5. 在静态文件仓库，即`nicopcat/nicopcat.github.io`下：
    - 找到 `Settings` - `Deploy Keys`
    - 点 `Add deploy key` ，新增公钥，名字可以随意取。将`.ssh/`里的公钥全部拷贝进来，内容以`ssh-rsa:`开头
    - 注意：要勾选 `Allow write access`
![deploy-key](https://i.bmp.ovh/imgs/2022/03/30/0f3fe4d3dffea408.png)

## 添加workflows文件 配置 Github Action
在源码跟目录下新建 `/.github/workflows/gh-pages.yml`，内容如下，需要更改的地方为你自己的仓库、分支。
```yml
name: Deploy GitHub Page

on:
  push:
    branches:
      - main # 只在main上push触发部署

jobs:
  deploy:
    name: deploy github page
    runs-on: ubuntu-latest # 使用ubuntu系统镜像运行自动化脚本

    steps: # 自动化步骤
        - uses: actions/checkout@v2  # 第一步，下载代码仓库
            with:
                submodules: true  # 有submodules

        - name: Setup Hugo
            uses: peaceiris/actions-hugo@v2
            with:
                hugo-version: latest  # hugo版本
                extended: true  # 是否为extended版本

        - name: Build
            

        - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
                external_repository: nicopcat/nicopcat.github.io # 静态文件仓库
                deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }} # 密钥名
                publish_dir: ./public # 静态网页路径
                publish_branch: main
```

写好后把文件push上去即可。