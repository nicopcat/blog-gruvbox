---
title: "「哔哔点啥」取消显示'一周前','一小时前'"
date: 2022-06-03T19:00:00+08:00
# lastmod: 2022-01-09T16:39:00+08:00
draft: false
tags: ["Hugo","哔哔点啥"]
---
众所周知，本 cafe 使用了由 `木*5` 老师开发的[哔哔点啥](https://immmmm.com/bb-by-wechat-pro/)页面，本贴记录一下如何取消`“一周前”`等提示，回归无聊的`YYYY-MM-DD`天数显示。
# 方法
去掉“周前”，”月前“这些时间点：  
1. 找到`ispeak-bber-md.min.js` or `ispeak-bber.min.js`  
2. 复制下面这段代码，查找，然后删掉它们  
```js
if(l>=1&&l<=3)n=" "+parseInt(l)+" 月前";else if(f>=1&&f<=3)n=" "+parseInt(f)+" 周前";else if(c>=1&&c<=6)n=" "+parseInt(c)+" 天前";else if(u>=1&&u<=23)n=" "+parseInt(u)+" 小时前";else if(a>=1&&a<=59)n=" "+parseInt(a)+" 分钟前";else if(s>=0&&s<=r)n="刚刚";else
```

# or ...
when you miss it, put it back on before `{var p=new Date`😁