---
title: "Gallery"
layout: "baseof"
url: "/gallery/"
showToc: false
Hidemeta: true
ShowBreadCrumbs: false
---

<!-- <script src="https://unpkg.com/vue@next"></script> -->

<script src="/src/vue.global.prod.js"></script>
<link rel="stylesheet" href="/src/index.css">
<script src="/src/main.js"   type="module"></script>
<body>
<div id="app">
  <div class="navbar" v-cloak>
    <span><a href="/gallery/" class="active-link">{{title.random}}</a></span>
    |
    <span><a href="/dame/">{{title.dame}}</a></span>
    | 
    <span><a href="/jane-works/">{{title.jane}}</a></span>
    <br>
  </div>
  <transition name="spinner" mode="out-in">
      <div class="spinner" v-show="isLoading">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
  </transition>
  <div class="container" v-cloak>
      <div class="wrapper" v-for="item in imgSrc">
        <img 
            :src="item.linkAdd" :alt="item.altText" :key="item.id"
            @click.prevent="currentShow(item.linkAdd)"
            @load="loaded"
            />
        <div class="caps" v-cloak>
            <h3>{{item.pname}}</h3>
            <span>{{item.descriptions}}</span>
        </div>
      </div>
  </div>
  <transition name="popup" @click="closeImg" >
    <div 
        v-if="maskOn" 
        :class="maskOn?'mask':''" 
        @click="closeImg"  >
        <img :src="currentImg" alt="">
    </div>
  </transition>


</div>
</body>