//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lineValue: 0,
    blockValue: 0,
    blockSrc: '/images/index/aixin.svg',
  },
  onLoad: function () {

    this.setProcessWith(50); // 1~100 随意取值
    
  },
  setProcessWith(data) {
    let sliderValue = parseInt(data);
    wx.createSelectorQuery().select(`.progress__bg`).boundingClientRect(res => {
      console.log(res);
      this.setData({
        lineValue: res ? res.width * (sliderValue / 100) : 0,
        // 减9px == 减去心形图片一半像素
        blockValue: res ? res.width * (sliderValue / 100) - 9 : 0 
      });
    }).exec();
  },
})
