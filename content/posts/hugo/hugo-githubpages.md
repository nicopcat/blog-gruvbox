---
title: "Hugo | 博客部署篇"
date: 2022-01-08T13:55:19+08:00
lastmod: 2022-05-05T07:00:00+08:00
draft: false
showToc: true
tags: ["Hugo","部署"]
---
# 使用 Netlify 托管
最近发现用 Netlify 部署静态网页对新手友好得多，真滴推荐用它部署你的博客或各种小项目！  

可以参考我的另一篇文章 [如何使用 Netlify 快速部署个人项目
](https://www.niqks.tk/posts/tech/posts/deploy-a-vue-cli-prj-w-netlify/)

## 流程
1. 首先需要把源码发布到你的 Github 仓库，步骤参考下文 [如何部署到github-pages](#如何部署到github-pages) 👇
2. 进入 [Netlify](https://www.netlify.com/)，注册，创建新项目，选择 `Add new site`
3. 选择从 `Import an existing project` - 连接 Github - 选择刚刚创建的博客项目仓库
4. Basic build settings:
    - Build command: `hugo` // 部署前先运行 hugo 指令 生成新的 Public 文件
    - Publish directory: `public` // 指定 public 文件夹为部署文件
5. 点击 `Deploy site` 完成部署

# 使用 Github Pages 托管
## Github Pages 是给啥
[搭建篇](https://www.niqks.tk/posts/hugo/hugo-site/) 讲了如何通过安装和指令快速地建站、安装主题和写文章。这一篇将介绍如何托管自己的博客，让其他人可以访问。  

最简单的方法是交给第三方托管，如 腾讯云，阿里云，Github Pages，Vercel 等。 我选择的是之前练习写项目时用过的 **Github Pages**。  

Github Pages 可以认为是一个为用户免费托管（hosted）并发布网站或个人 projects 的免费的仓库。  

Github Pages 的优点是：
- 完全免费。为你省去买云服务器的费用。
- 搭建简单。只需按步骤一步步操作即可，不需要了解背后的技术细节。
- 功能丰富。你可以绑定自己的域名，使用免费的HTTPS，自定义主题等。

## 如何部署到GitHub Pages
### 注册Github
- 首先你需要注册一个 GitHub 账号，并在个人主界面里选择创建一个新的 Repository 。
### 创建新的Repository
- 在页面的右上角，点击 `+` ，下拉菜单选择 `New Repositoty` 来新建一个仓库。
- `Repository name` 必须为 `username.github.io`，例如我的仓库`nicopcat.github.io`。

- 勾选 `Public`，点 `Create Repository` 创建仓库。



### 关联Github远程仓
#### 将源码推送到仓库
- 首先需要新建一个放博客源码的仓库，可以命名为`Hugo-Sources`。  
- 在根目录`/quickstart/`下，关联此仓库：
```shell
git init
git add .
git commit -m "first commit"    
git remote add origin https://github.com/username/Hugo-Sources.git
git push -u origin main
```
#### 将public文件推送到仓库
- 生成`public`文件，输入：
```shell
hugo
```
- 推送到`username.github.io`仓库：
```shell
git init 
git add .   
git commit -m "first commit"    
git remote add origin https://github.com/username/username.github.io.git   
git push -u origin main   
```

#### 利用Github Action 偷懒*
Github Actions是Github推出的一个CI\CD 服务。简单来说，利用Github Actions，可以把原本需要推送两次的流程（源码和public文件），简化到只需执行一次推送（源码），然后自动更新public文件。  

具体教程请看：[用Github Action自动部署Hugo博客Public页面](https://www.niqks.tk/posts/hugo/github-action/)

#### *注
<mark>用 Netlify 部署相当于帮你偷懒，省掉配置 Github Action 的步骤，就非常Nice啊！再次推荐!...<mark> 😂

### 发布你的博客
在`username.github.io`仓库下，单击 ⚙`Settings`，拉到下方，找到 `GitHub Pages`。   
根据下图勾选，单击 `Save`，此时就会生成网址 `username.github.io`。 

稍等几分钟等待部署，访问这个地址，就能看到博客成功部署。
![![20211123144734](httpsi.loli.net20211123sxQIWZf8am1TBJc.png)](https://i.loli.net/2021/11/23/wOPEZJjDSWhukTF.png)


