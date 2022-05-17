---
title: "Hugo 和 PaperMod主题的小功能"
date: 2022-03-14T0:18:00+08:00
lastmod: 2022-03-30T0:18:00+08:00
tags: [ "Blog", "Hugo"] 
description: "分享一些建站小贴士"
draft: false
showToc: true
---
## 1. 将hack字体CDN link 引入 head
最简单的方法是把hack字体的CDN地址引入`head`.
```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css">
```

接下来就是找到正确的地方。  
在看某些教程的时候，我非常困惑，文件地址到底是根目录下，还是theme下面的文件？

我们最终的目的是把上面的link放到在`index.html`的`<head></head>`部分，所以需要找到post是在哪里render成head的。  
我们发现`theme/partials`里面有一个`head.html`，确实可以修改这里，但我们最好不要修改原来的主题，否则很难维护，PaperMod主题在partials里配备了可供用户自定义的文件`extend_head.html`。
  
找到 `根目录/themes/PaperMod/layouts/partials/extend_head.html`，插入上面的link即可：
```html
{{- /* Head custom content area start */ -}} 
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css">
{{- /* Insert any custom code
(web-analytics, resources, etc.) - it will appear in the<head></head> section of every page. */ -}} {{- /* Can be overwritten by partial with the same
name in the global layouts. */ -}} {{- /* Head custom content area end */ -}}
```
引入成功，接下来需要找到相关的css文件修改。 

---
## 修改CSS
找到 `themes/PaperMod/assets/css/extended` ，这个文件夹下有一个`blank.css`文件，和`extend_head.html`一样，也是为了给用户添加自定义stylesheet。  

你可以在`blank.css`中添加如下代码，也可以新建一个，如`custom_style.css`的新文件，it's all up to you：
```css
pre,code{
  font-family: "hack", monospace;
}
```


# 2. 添加sub sections
没有sub sections的文章，就会像Archive里面的文章，没有分类地排列，如图：
![archives](https://i.bmp.ovh/imgs/2022/03/30/a287f5ea63186c1c.png#center)

如果想要按照分类展示文章，可以添加**sub sections**。  

Hugo目录结构
```
content
└── blog        <-- Section, 因为是content的子目录
    ├── funny-cats
    │   ├── mypost.md
    │   └── kittens         <-- Section, 因为包含_index.md
    │       └── _index.md
    └── tech                <-- Section, 因为包含 _index.md
        └── _index.md
```
总之，如果想增加sub sections，需要在文件夹里添加一个`_index.md`文件

观察一下目录结构我们可以发现，无论是添加 `/funny-cats/` 还是 `tech` 副目录，里面都会包含至少一个`_index.md`，在Section下依然可以添加sub section，如`kittens`

# 3. 添加 cover image
front matter:
```yaml
cover:
    image: "图片地址"
    # 可以直接用外链
    # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
    alt: ""
    caption: ""
    relative: false # 使用相对路径，不过相对路径比较tricky...
```
当你使用相对路径，就默认将图片放到Hugo的Page Bundle中，会自动为你生成好几个size的图片。

- 减少博客生成时间，可以取消自适应图片的功能：
```yaml
params:
    cover:
        responsiveImages: false
```

# 4. 添加"bb点啥"页面
有点像在自家QQ空间留言板自言自语的一个功能，貌似由[木木木木木](https://immmmm.com/bb-by-wechat-pro/#:~:text=%E5%8E%9F%E6%98%AF%E5%8F%91%E5%88%B0LeanCloud,%E5%93%94%E5%88%97%E8%A1%A8%E3%80%81%E5%93%94%E5%93%94%E6%90%9C%E7%B4%A2%EF%BC%81)开发。  

按着文章整就行啦，也参考了一下Bore's Notes的[文章](https://bore.vip/archives/6c31209c/)。