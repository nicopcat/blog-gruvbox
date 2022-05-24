---
title: "Hugo | Creat a Gallery Page with Spolight Style "
date: 2022-02-06T03:00:00+08:00
lastmod: 2022-02-06T16:33:00+08:00
draft: false
showToc: false
tags: ["vue", "Hugo"]
---

## 1.Create a gallery page

My goal is to build a galley sub page which can contain my photo works.

The problem is that I don't know how to use `.md` file to render these markups mixed with Vue scripts so that I had to put a raw `.html` file and then imported css stylesheet from my theme.

**Stacks**:

- HTML
- CSS
- Vue.js

### 1.2 HTML

They are simple markups:

```html
<div class="container">
  <div class="wrapper">
    <!-- 图片主体 -->
    <a href=""><img src="" alt="" /></a>
    <!-- 文字说明 -->
    <div class="caps">
      <h3>Pic Name</h3>
      <span>Pic Descriptions</span>
    </div>
  </div>
</div>
<script src="./app.js"></script>
<script src="https://unpkg.com/vue@next"></script>
```

### 1.3 CSS

I used `CSS Grid System` to arrange the layout and `@media query` for responsive presentation.

_with the help of [CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html) and W3Schools instructions._

### 1.4 Vue.js

Now it's time to add some functions and load the images.

In the `HTML` file, add:

```html
<div class="container">
  <div class="wrapper" v-for="item in imgSrc">
    <a href="" @click.prevent="currentShow(item.linkAdd)"
      ><img :src="item.linkAdd" :alt="item.altText" :key="item.id"
    /></a>
    <div class="caps">
      <h3>{{item.pname}}</h3>
      <span>{{item.descriptions}}</span>
    </div>
  </div>
</div>
```

In `Vue.js`, add:

```js
const app = Vue.createApp({
  data() {
    return {
      // 存放图片data
      imgSrc: [
        {
          id: 01,
          pname: "Antelope Canyon",
          altText: "antelope-canyon",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/antelope-canyon.JPG",
          descriptions: "羚羊谷真是太妙了。",
        },
        {
          id: 02,
          pname: "Cruise",
          altText: "cruise",
          linkAdd: "https://blogpic-1308403500.file.myqcloud.com/cruise.JPG",
          descriptions: "对面就是著名的自由女神像。",
        },
      ],
    };
  },
}).mount("#app");
```

Now I've finished the main part of the gallery page.

## 2. Spotlight gallery style

There are plenty of spotlight plugins all over the internet. I could've used them easily. But I wanted to practice Vue.js so I wrote it with Vue.js

Spolight plugins:
https://github.com/nextapps-de/spotlight

### 2.1 Add some functions

Add some `@click` event in `<a>` tag:

```html
<a href="" @click.prevent="currentShow(item.id)"
  ><img :src="item.linkAdd" :alt="item.altText" :key="item.id"
/></a>
```

Above the `.container` div, add:

```html
<div class="mask" v-show="flag">
  <img :src="currentImg" alt="" />
  <button @click="flag=false">×</button>
</div>
```

In `Vue.js` file, write some functions to trigger the popup event:

```js
methods: {
    currentShow(add){
      this.currentImg = add;
      this.flag = true;
    }
},
```

### 2.2 Spotlight css reference

```css
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
```

## 3. Display

![display](https://blogpic-1308403500.file.myqcloud.com/markdown/动画.gif)
