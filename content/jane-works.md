---
title: "Jane's Works" # in any language you want
layout: "baseof" # is necessary
url: "/jane-works/"
showToc: false
Hidemeta: true
ShowBreadCrumbs: false
---

<script src="/src/vue.global.prod.js"></script>
<link rel="stylesheet" href="/src/index.css">
<div id="app">
  <div class="navbar" v-cloak>
      <span><a href="/gallery/">{{title.random}}</a></span>
      |
      <span><a href="/dame/">{{title.dame}}</a></span>
      |
      <span><a href="/jane-works/" class="active-link">{{title.jane}}</a></span>
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
  <div class="container">
      <div class="wrapper" v-for="item in janeWorks">
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
  <transition name="popup" @click="closeImg">
      <div 
          v-if="maskOn" 
          :class="maskOn?'mask':''" 
          @click="closeImg"  >
          <img :src="currentImg" alt="">
  </div>
  </transition>
</div>
<script src="/src/main.js" defer></script>
<style>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(215, 153, 35);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
