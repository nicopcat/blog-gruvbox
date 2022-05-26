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
  methods: {
    currentShow(add) {
      this.maskOn = true;
      this.currentImg = add;
    },
    closeImg() {
      this.maskOn = false;
    },
    loaded() {
      this.isLoading = false;
    },
  },
  created() {
    this.isLoading = true;
  },
}