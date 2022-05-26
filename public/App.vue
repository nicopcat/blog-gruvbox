<script>
export default {
  data() {
    return {
      currentImg: "",
      maskOn: false,
      isLoading: false,
      imgSrc: [
        {
          id: new Date().toISOString(),
          pname: "Soho",
          altText: "Soho",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-01.JPG",
          descriptions: "2019-07-14",
        },
        {
          id: new Date().toISOString(),
          pname: "某间咖啡店",
          altText: "某间咖啡店",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-02.JPG",
          descriptions: "2019-07-14",
        },
        {
          id: new Date().toISOString(),
          pname: "Harlem区",
          altText: "Harlem区",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-04.JPG",
          descriptions: "2019-07-28",
        },
        {
          id: new Date().toISOString(),
          pname: "放小狗风筝",
          altText: "放小狗风筝",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-05-2022-05-24.JPG",
          descriptions: "2019-07-28",
        },
        {
          id: new Date().toISOString(),
          pname: "A lady crossing the stree",
          altText: "A lady crossing the stree",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-06-2022-05-24.JPG",
          descriptions: "2019-07-28",
        },
        {
          id: new Date().toISOString(),
          pname: "Lincoln Center",
          altText: "Lincoln Center",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-07-2022-05-24.JPG",
          descriptions: "2019-07-28",
        },
        {
          id: new Date().toISOString(),
          pname: "Black Pumas Free Show",
          altText: "Black Pumas Free Show",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/main/pic-08-2022-05-24.JPG",
          descriptions: "2019-07-28",
        },
      ],
      DamePics: [
        {
          id: new Date().toISOString(),
          pname: "J小将画咩咩（其一）",
          altText: "咩咩3",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/gallery/miemie/1159970fe272d8e0c376689472d9eb2.jpg",
          descriptions: "with ProCreate",
        },
        {
          id: new Date().toISOString(),
          pname: "咩咩1",
          altText: "咩咩1",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown%2F%E5%92%A9%E5%92%A9%E6%97%A5%E5%B8%B81.jpg",
          descriptions: "乖乖趴床上。",
        },
        {
          id: new Date().toISOString(),
          pname: "咩咩2",
          altText: "咩咩2",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown/3e7b04c40b9f2011c25c4efa8906301.jpg",
          descriptions: "抱住手~",
        },
      ],
      janeWorks: [
        {
          id: new Date().toISOString(),
          pname: "work 1",
          altText: "work 1",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown/4869fd0703e62163a2f1d552f530517.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 2",
          altText: "work 2",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown/5b70ce379f324ce48b6c80c065df8f9.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 3",
          altText: "work 3",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown/1a24e6521f9e6274cf74e276cfbbe3e.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 4",
          altText: "work 4",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown/eab5c40e2a740b58c023236a051a21b.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 5",
          altText: "work 5",
          linkAdd:
            "https://blogpic-1308403500.file.myqcloud.com/markdown/a8c37a24771f44f6c103d1ec7743344.jpg",
          descriptions: "",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="navbar">
    <span><a href="/gallery/" class="active-link">Main</a></span>
    <span><a href="/dame/">小猫日常</a></span>
    <span><a href="/jane-works/">Jane的画儿</a></span>
    <br />
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
    <div class="wrapper" v-for="item in imgSrc" v-cloak>
      <img
        :src="item.linkAdd"
        :alt="item.altText"
        :key="item.id"
        @click.prevent="currentShow(item.linkAdd)"
        @load="loaded"
      />
      <div class="caps" v-cloak>
        <h3>{{ item.pname }}</h3>
        <span>{{ item.descriptions }}</span>
      </div>
    </div>
  </div>
  <transition name="popup" @click="closeImg">
    <div v-if="maskOn" :class="maskOn ? 'mask' : ''" @click="closeImg">
      <img :src="currentImg" alt="" />
    </div>
  </transition>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

.container {
  margin-top: 1rem;
}

.container .wrapper {
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.container .wrapper img {
  margin: auto;
  border: 0.5em solid white;
  cursor: pointer;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
}

[v-cloak] {
  display: none;
}

/* caps start  */
.container .wrapper .caps {
  text-align: center;
  min-width: 20%;
  margin-bottom: 3em;
}

.wrapper .caps h3 {
  margin-top: 1em;
  font-size: 1.2em;
}

.wrapper .caps span {
  color: #959595;
  font-size: 0.8em;
}

/* caps ends  */

/* navbar starts  */
.wrapper .navbar {
  border-bottom: 3px solid rgba(30, 30, 30, 0.285);
  padding-bottom: 2rem;
}

.navbar {
  height: 2rem;
  margin-top: 2rem;
  line-height: 1rem;
  box-sizing: border-box;
}

.navbar > span {
  border-bottom: 1px solid rgba(122, 122, 122, 0.258);
}

.navbar span a {
  font-family: "futyra-pt";
  color: var(--secondary);
  font-size: 1.2em;
  font-weight: bold;
  padding: 0 0.6rem;
  box-shadow: none;
  border: 1px solid transparent;
}

.navbar .active-link {
  box-shadow: none;
  background-color: rgb(148 148 148 / 18%);
  color: var(--primary);
  border-width: 1px;
  border-style: solid solid none solid;
  border-color: rgba(199, 199, 199, 0.074);
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom: 1px solid var(--primary);
}

.navbar span a:hover {
  background-color: rgba(199, 199, 199, 0.163);
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}

/* navbar ends  */

/* 遮罩层 */

.mask {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
}

.mask img {
  max-width: 90vw;
  max-height: 90vh;
  margin: 1.5rem;
  z-index: 100;
  border-radius: 0.3rem;
  border: none;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.8);
  transform: translateY(-50px);
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.25s ease;
}

.popup-leave-from,
.popup-enter-to {
  opacity: 1;
  transform: translateY(0px);
  transform: scale(1);
}

/* spinner */
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
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--primary);
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

/* spinner 过渡 */

.spinner-enter-from,
.spinner-leave-to {
  opacity: 0;
  /* transform: translateY(-30px); */
}

.spinner-enter-active {
  transition: all 0.5s ease-out;
}

.spinner-leave-active {
  transition: all 0.5s ease-in;
}

.spinner-leave-from,
.spinner-enter-to {
  opacity: 1;
  /* transform: translateY(0px); */
}

@media screen and (max-width: 600px) {
  .container .wrapper {
    padding: 0;
  }
  .container .wrapper img {
    max-width: 100%;
    border: 0.5em solid white;
    cursor: pointer;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>