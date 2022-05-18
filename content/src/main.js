const app = Vue.createApp({
  data() {
    return {
      currentImg: '',
      maskOn: false,
      isLoading: false,
      imgSrc: [
        {
          id: 01,
          pname: "Antelope Canyon",
          altText: "antelope-canyon",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/antelope-canyon.JPG",
          descriptions: "羚羊谷真是太妙了。",
        },
        {
          id: 02,
          pname: "Cruise",
          altText: "cruise",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/cruise.JPG",
          descriptions: "对面就是著名的自由女神像。",
        },
        {
          id: 03,
          pname: "Monterey Bay Aquarium",
          altText: "monteray-bay-aq",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/monteray-bay-aq.JPG",
          descriptions: "加州的蒙特雷湾水族馆，非常可爱。",
        },
        {
          id: 04,
          pname: "Chicago Deep Dish Pizza",
          altText: "deep-dish-pizza",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/deep-dish-pizza.JPG",
          descriptions: "芝加哥有名的深盘pizza🍕",
        },
        {
          id: 05,
          pname: "Google, Android",
          altText: "google-android",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/google-android.JPG",
          descriptions: "硅谷，谷歌总部里的安卓玩偶。",
        }, {
          id: 06,
          pname: "Pika",
          altText: "pika",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/pika.JPG",
          descriptions: "Good Girl Pika",
        },
        {
          id: 07,
          pname: "Painting",
          altText: "painting",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/painting-1.JPG",
          descriptions: "古根海姆的一幅画。",
        }, {
          id: 08,
          pname: "Old Buildings In NYC",
          altText: "ny-old-buildings",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/ny-old-buildings.JPG",
          descriptions: "NYC",
        },
      ],
      DamePics: [
        {
          id: new Date().toISOString(),
          pname: "J小将画咩咩（其一）",
          altText: "咩咩3",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/gallery/miemie/1159970fe272d8e0c376689472d9eb2.jpg",
          descriptions: "with ProCreate",
        },
        {
          id: new Date().toISOString(),
          pname: "咩咩1",
          altText: "咩咩1",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown%2F%E5%92%A9%E5%92%A9%E6%97%A5%E5%B8%B81.jpg",
          descriptions: "乖乖趴床上。",
        },
        {
          id: new Date().toISOString(),
          pname: "咩咩2",
          altText: "咩咩2",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/3e7b04c40b9f2011c25c4efa8906301.jpg",
          descriptions: "抱住手~",
        },
      ],
      janeWorks: [
        {
          id: new Date().toISOString(),
          pname: "work 1",
          altText: "work 1",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/4869fd0703e62163a2f1d552f530517.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 2",
          altText: "work 2",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/5b70ce379f324ce48b6c80c065df8f9.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 3",
          altText: "work 3",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/1a24e6521f9e6274cf74e276cfbbe3e.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 4",
          altText: "work 4",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/eab5c40e2a740b58c023236a051a21b.jpg",
          descriptions: "",
        },
        {
          id: new Date().toISOString(),
          pname: "work 5",
          altText: "work 5",
          linkAdd:
            "https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/a8c37a24771f44f6c103d1ec7743344.jpg",
          descriptions: "",
        },
      ],
    }
  },
  methods: {
    currentShow(add) {
      this.maskOn = true;

      this.currentImg = add;
    },
    closeImg() {
      this.maskOn = false;
    },
    loaded() {
      this.isLoading = false
    }
  },
  created() {
    this.isLoading = true
  }
})


app.mount("#app");