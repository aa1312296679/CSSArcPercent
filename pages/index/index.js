//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    percent: 10
  },

  onLoad: function() {
    this.selectComponent("#arc").ringAngle();
  }
})