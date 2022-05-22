---
# title: "Main"
# layout: "baseof"
url: "/gallery/"
showToc: false
Hidemeta: true
ShowBreadCrumbs: false
---
<script src="https://unpkg.com/vue@next"></script>
<link rel="stylesheet" href="/src/index.css">
<div id="app">
    <div class="navbar" preload>
        <span><a href="/gallery/" class="active-link">Main</a></span>
        <span><a href="/dame/">小猫日常</a></span>
        <span><a href="/jane-works/">Jane的画儿</a></span>
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
    <div class="container" >
        <div class="wrapper" v-for="item in imgSrc" v-cloak>
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