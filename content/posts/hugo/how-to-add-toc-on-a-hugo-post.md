---
title: "Hugo Papermod主题 创建(侧边)目录"
date: 2021-12-20T22:59:16+08:00
draft: false
tags: ["Hugo"]
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=true} -->

我在逛友邻的 blog 或是技术贴时发现，文章里若是有一个目录，就可以方便读者快速浏览自己看到的内容。在此之前，我尝试过 VS Code 的一些插件，但效果都不是特别理想，直到阅读了*谌中钱* 的一篇[VSCode 插件 - Markdown Preview Enhanced 详解](https://juejin.cn/post/7008374961135943716)，才几乎完美地解决了在 md 文档中生成中文 TOC 的需求。

# 1. MPE 插件是什么

> Markdown Preview Enhanced 是一款为 Atom 以及 Visual Studio Code 编辑器编写的超级强大的 Markdown 插件。 这款插件意在让你拥有**飘逸**的 Markdown 写作体验。

1. 官方文档地址：[Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)
2. 安装：`ctrl + shift + x` 搜索 Markdown Preview Enhanced

# 2. MPE 有什么用

## 2.1 实时预览功能

写 markdown 文档或 码字时，可以随时查看实时生成的效果，非常方便~

使用方法：

- 打开任意 markdown 文件，点击右键，选择`MPE: 打开侧边预览`
- 或是使用快捷键`shift+k v`

![20211220231552](https://blogpic-1308403500.file.myqcloud.com/markdown/20211220231552.png)

## 2.2 生成 TOC 树

我是打开预览后，发现右上角有三个按钮，其中第一个可以在 MPE 内部生成一个完美的 TOC，于是在网上搜索能否把它生成的 TOC“占为己用”，没想到真的可以(感觉挖到宝)
**步骤**：

1. 可以通过 `cmd-shift-p` 然后选择 `Markdown Preview Enhanced: Create Toc` 命令来创建 TOC
   - 可以创建多个 TOCs
   - config:
     - 在你的 TOC 中排除一个标题，请在你的标题 后面 添加 `{ignore=true}`
     - `orderedList`: 是否使用有序列表。
     - `depthFrom, depthTo [1~6]` 包含的。
     - `ignoreLink` 如果设置为 true，那么 TOC 将不会被超链接
2. 上面的指令其实就是生成下面这句代码`<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->`，去掉注释，保存即可生成 toc
3. 注意，还需要在`config`文件中添加：

```yaml
params:
  showtoc: true
  tocopen: true
```

# 3. 侧边目录 ✔

参考 Sulv 的[文章](https://www.sulvblog.cn/posts/blog/hugo_toc_side/)，获得侧边目录~  
现在已经不需要 MPE 生成，直接使用 markdown 语法写博客，就可以生成目录。

除了在 config 文件设置 toc，还可以在 post 的 font matter 加上以下参数，覆盖 config 的设置：

```yaml
showToc: true  //默认显示toc
tocOpen: true  //默认展开toc
```
