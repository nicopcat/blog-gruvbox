---
title: "如何使用 Netlify 快速部署个人项目"
date: 2022-04-30T17:00:00+08:00
# lastmod: 2022-03-03T12:29:00+08:00
draft: false
showToc: false
tags: ["Deploy","Netlify"]
---
一直耳闻 Netlify 非常好用，其实是相当好用！  

先进入 [Netlify 官网](https://app.netlify.com/)，使用 Github 账号授权登陆。登陆完毕就看到一个大大的拖拽框，简直就是说“网页快快往我这放！”    

不过我想托管的 demo 是用 Vue-cli 做的，没办法直接把文件丢进去，所以写这篇记录一下过程。   

# Netlify x Vue-cli
其实我也是照着官网的[一篇文章](https://www.netlify.com/blog/2019/11/30/how-to-deploy-a-vue-site/)做的，简单记录下步骤：
1. 将 Demo 源码放到 Github 的仓库中
2. 登陆 Netlify，新建一个 site，选择刚刚创建的那个仓库
3. 点击 `Site settings⚙️`，填写一下配置
    - Base directory: 可以空着
    - Build command: `npm run build`
    - Publish directory: `dist`
4. 点击 `Deploy Site` 发布
5. 就这么简单！！  

文章中还有 Nuxt, Gridsome, Domains 的相关的部署信息，有需求可以参考一下。

# Other
Netlify 服务提供一个免费的 Starter Plan，适合展示个人的、兴趣爱好和实验性的小项目，免费套餐包含：
- 0 KB / 100 GB bandwidth
- 0 / 300 build minutes
- (Apr 29 to May 29)

总之，个人小项目可以放在这上面，访问量大的还是花点钱吧~