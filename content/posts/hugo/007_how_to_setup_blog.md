---
title: "给J小将的写博客指南"
date: 2022-03-26T0:33:00+08:00
# lastmod: 2022-01-09T16:39:00+08:00
draft: false
showToc: true
tags: ["Hugo"]
---

>剧情摘要：前些日子，帮J小将在主机上搭了博客，但是如何让她在另一台电脑也能写文章呢？

# 前提准备
## 下载Git
1. 地址：https://git-scm.com/download/win
2. 选择`64-bit Git for Windows Setup`
3. 打开安装包，按照推荐项一路enter下去就好
4. 在任意一个窗口地址栏输入`cmd`，按回车，输入`git version`，回车。若出现版本号则说明下载成功。

## 下载Hugo
### 方法一：二进制安装包
1. 地址：https://github.com/gohugoio/hugo/releases
2. 找到 `hugo_extended_0.95.0_Windows-64bit.zip` 安装包，下载。
1. 创建文件夹
    - 创建一个新的文件夹，`G:\Hugo`
    - 创建一个新的文件夹，`G:\Hugo\bin`
2. 确保 `hugo.exe` 文件在 `G:\Hugo\bin` 文件夹中
3. 把 hugo.exe 可执行文件添加到你的 PATH路径中
    - 搜索：环境变量 - 编辑系统环境变量 - 高级 - 环境变量
    - 系统变量 - 找到`path` - 双击打开 - 新建变量 - 输入`G:\Hugo\bin` - 保存 
4. 运行`hugo.exe`
5. 输入`hugo version`查看得到版本号就说明安装成功。

### 方法二：用chocoley安装
1. 地址：https://chocolatey.org/install ,按照提示安装即可
2. 运行
普通版本
```
choco install hugo -confirm
```

extended版本：
```
choco install hugo-extended -confirm
```

## 下载 Visual Studio Code 编辑器
1. 地址：https://code.visualstudio.com/

# 将博客文件clone到本地
## 配置git用户名和邮箱
1. 找一个好记的地方，创建文件夹`Hugo`（或者随便一个什么名字），在地址栏输入`cmd`以打开命令行，输入下面指令：  
```
$ git config --global user.name "Username"
$ git config --global user.email you@example.com 
```

查看设置好的邮箱和用户：
```
git config --global --list
```

## 从Github仓库Clone文件夹
1. Clone存放博客源代码的仓库
```
git clone https://github.com/janew14/blog-sources.git
```
连接也许不稳定，试试连vpn或切换vpn，总之，坚持到提示完成。
（坚持住！）

2. Clone完成后，你会发现多了一个`blog-sources`文件夹，点进去就是刚从仓库复制下来的文件，这会儿可以开始写博客了。

# 写文章
1. 打开Visual Studio Code，在应用商店（左侧栏最下面一个图标）搜索`chinese`，下载中文字体包
2. 点击`文件` - `将文件夹添加到工作区` - 添加`blog-sources`文件夹
3. 找到`content/posts/`，在需要的分类下创建新的 `.md`文档，就可以在里面写博客内容了。
4. 在博客内容前加上一些front matter，设置基本信息，如
```
---
author:
    - name: "Jane"  //作者的名字
date: 2022-03-19  // 时间格式
title: "今天"  // 文章标题
categories:
    - "日记"  // 添加分类
tags:
    - "博客"
    - "个人"  // 添加标签
---
```

5. 提交之前预览：
```
hugo serve
```

# 推送提交到仓库
写好文章后，需要push到仓库，博客才会显示更新后的内容。
1. 在`blog-sources`文件夹打开cmd，输入:
```
hugo
git add .
git commit -m"任意的附注内容”
git push
```
2. 因为网络问题，可以开关vpn多试几次。如果push显示403错误，可能出现验证问题，可能需要添加SSH KEY，到时候联系我。  
3. 因为已经配置好Github Action，所以只需要将源码推送，public的代码也会自动更新，而不需要推送两遍。