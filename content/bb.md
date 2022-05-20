---
title: "大声嚷嚷" # in any language you want
url: "/bb"
---

<div id='speak'></speak>
<!-- 使用markdown渲染 -->
<script type="text/javascript" src="/ispeak-bber-md.min.js" charset="utf-8" ></script>
<!-- 不使用markdown渲染 -->
<!-- <script type="text/javascript" src="/ispeak-bber.min.js" charset="utf-8" ></script> -->
<!-- 解析微信表情（参考：https://github.com/buddys/qq-wechat-emotion-parser） -->
<!-- <script src="https://cdn.jsdelivr.net/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js"></script> -->

<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: 'niqks', // 显示的昵称
      envId: 'bber-2g38ei06001dbc5f', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://img3.doubanio.com/icon/ul152454124-10.jpg',
      // fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg:'https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/gif/kurby.gif', //kirby
      // 'https://smashinghub.com/wp-content/uploads/2014/08/cool-loading-animated-gif-1.gif', // cat
      // 'https://i.pinimg.com/originals/1c/13/f3/1c13f3fe7a6bba370007aea254e195e3.gif', // blueballloading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script>
</div>
