// index.js
// 轮播图片
const swiperList = [{
    value: `/res/img/轮播1.jpg`,
    ariaLabel: '图片1',
  },
  {
    value: `/res/img/轮播2.jpg`,
    ariaLabel: '图片2',
  },
];


Page({
  data: {
    msg: "hello world",
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
  clickImg1: function () {
    wx.switchTab({
      url: '/pages/peizhen/peizhen', // 新页面的路径
    })
  },
  clickImg2: function () {
    wx.navigateTo({
      url: '/pages/yuancheng/yuancheng', // 新页面的路径
    })
  },
  clickImg3: function () {
    wx.navigateTo({
      url: '/pages/xiangdao/xiangdao', // 新页面的路径
    })
  },
  clickImg4: function () {
    wx.navigateTo({
      url: '/pages/peixun/peixun', // 新页面的路径
    })
  },
})