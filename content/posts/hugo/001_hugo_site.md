---
title: "Hugo | 使用Hugo搭建静态博客：Hugo搭建篇"
date: 2021-11-20T17:23:01+08:00
lastmod: 2022-01-09T16:39:00+08:00
tags: [ "Blog", "Hugo"] 
description: "为何选择Hugo如以及如何用Hugo创建个人博客，引入主题，写文章等等……"
draft: false
showToc: true
---


# Why Hugo?
之前使用的博客都是博客商（？）提供的框架，方便简单但定制化几乎为0。我想，既然学了些前端知识，不如从框架鼓捣一个新博客吧，记录平时因为懒惰而放弃书写的所见所闻所感，或就当作简单的备忘录也不错。

于是我把目光投向了Hexo, Wordpress, Jekyll等平台，无意间发现**Hugo的生成速度和自由度更高，构架的组织更完备，文档内容和相关主题也丰富。** 
> Hugo是由Go语言实现的静态网站生成器。简单、易用、高效、易扩展、快速部署。

官方文档：👇
- [Hugo: The world’s fastest framework for building websites](https://gohugo.io/)

- [Hugo中文文档](https://www.gohugo.org/)

时代在朝着短视频和更快更短的内容 feed 疯狂前进。时代越快我越慢（慢慢鼓捣文字），大概算是一种 old fashion 式的对抗？

# Hugo的安装和配置
[Hugo-Quick Start](https://gohugo.io/getting-started/quick-start/) 有详细的教程，这里简单整理一下：
## Install 安装
三种安装方法任君挑选~

1. **第一种：下载二进制安装包**  

到 [Hugo Releases](https://github.com/gohugoio/hugo/releases) 下载对应的操作系统版本的Hugo二进制安装包。

注意⚠️：因为hugo.exe并不是点开就好的安装包，下载运行之后还需要把Hugo添加到环境变量中。

具体步骤参考：
[给J小将的写博客指南](https://www.niqks.tk/posts/hugo/how-to-setup-blog/#%e4%b8%8b%e8%bd%bdhugo)


2. **第二种：命令行**

**Mac**  
使用 [Homebrew](https://brew.sh/)安装：  
```
brew install hugo
```

**Windows**   
使用 [Chocolatey](https://chocolatey.org/) 安装：  
```
choco install hugo -confirm
```

下载完成后，在终端输入`hugo version`查看版本号。

此时，目录下会有一个名为 `Hugo` 的文件夹。

## Create a New Site 生成站点
你可以通过指令快速生成一个站点：
```
hugo new site quickstart
```
恭喜你！此时你已成功创建了一个名为 `quickstart` 的站点，以下 `quickstart` 作为站点名。

## 2.3 Add a Theme 添加一个主题
去到 themes.gohugo.io 挑选一个自己喜欢的主题。我选择的主题是 **[PaperMod](https://themes.gohugo.io/themes/hugo-papermod/)**。

注：PaperMod 主题使用的是.yml/.yaml格式的配置文件，而hugo配置文件默认的后缀是.toml，转换指令：
```
hugo new site <name of site> -f yml
```

PaperMod 文档中列出了[三种安装方式](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation#method-1)。如果你对其他主题感兴趣，你可以按照文档中的步骤安装。

- 使用 git clone:
```
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

- 使用 [git submodule](https://www.atlassian.com/git/tutorials/git-submodule)
```
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod --depth=1
git submodule update --init --recursive # needed when you reclone your repo (submodules may not get cloned automatically)
``` 

- 使用直接下载ZIP包  
进到 PaperMod [主题页面](https://themes.gohugo.io/themes/hugo-papermod/) ，点击 `Download` ，再点击 `Code`，选择 `Download ZIP`，得到一个zip文件，解压后放入 `hugo/quickstart/themes/` 内，并需要将文档名由默认的 `/hugo-PaperMod-master` 改为 `/PaperMod`，否则无法正确匹配主题。

下载好主题后，会在根目录的/themes 文件夹下看到一个papermod的文件，说明主题已经下好噜~   
然后在配置文件 `config.yml` 中添加一下代码，指定选定的主题：
```
theme: "PaperMod"
```

## Add Some Content 发表内容
站点已经建好，该怎么写帖子呢？有两种方法：  

- **手动添加**（my pick)  
在 `quickstart/content/` 文件夹下新建一个`.md`文件，如 `my-first-post.md`。在文章的最前面，通常需要写`front-matter`，中文可以翻译成`预定义变量`，可以用来指定文章的元属性。 
下面是一个`front-matter`例子：
```
---
title: "My First Post"
date: 2019-03-26T08:47:11+01:00
draft: true
---
```
Hugo文档的说明：https://gohugo.io/content-management/front-matter/

- **利用 new 指令新建**  
如果用 new 指令生成新帖，Hugo会自动帮你生成时间：
```
<!-- 在/posts/ 文件夹下 新建一篇名为 my-first-post 的文章 -->
hugo new posts/my-first-post.md
```

此时，打开 `/content/` 文件夹，你可以看到`my-first-post.md`文件，用编辑器打开，就可以开始写文章了。

## 预览指令
```
hugo serve
```
这个指令可以在local端口预览你的博客。

# 其他自定义功能
- 评论系统：可以用 Waline, Discus（墙），github等
- About页面
- 搜索页面
- [哔哔点啥](https://immmmm.com/bb-by-wechat-pro/)页面
- gallery

# 托管与自定义域名
前期我是使用 Github Pages 来托管我的博客的，唯一的缺点是国内IP不挂梯子的话访问速度很慢。  
后来用了几天 Netlify 托管，它支持导入和一键部署，非常方便，比 Github Pages 的访问速度许多。
后来，又发现了另一个平台 Vercel，速度很长快，托管步骤也非常简单，只要连接我的Github 账号，选择相应的仓库就完成了部署，强烈推荐使用Vercel。

托管上线步骤可以参考我的其他帖子：  
- [Hugo | Github Pages托管篇](https://www.niqks.tk/posts/hugo/hugo-githubpages/)

自定义域名：
- [Hugo | Custom Domain 自定义域名篇](https://www.niqks.tk/posts/hugo/hugo-custom-domain/)

---
最新修改于:  
*2022/7/6*