// pages/horizontal/horizontal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0,
    horizontal: true,
    tableDemo: {
      thead: [
        { title: "姓名", col: "name"},
        { title: "年龄", col: "age" },
        { title: "学历", col: "degree" }
      ],
      tbody: [
        { name: "heavent", age: "25", degree: "本科"},
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" },
        { name: "heavent", age: "25", degree: "本科" }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  closeHorizontal: function(e) {
    this.setData({
      horizontal: false
    })
  },
  stopMove: function (e) {
    
    //console.log(e);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let _this = this;
    wx.getSystemInfo({
      success: function(res) {
        let winHeight = res.windowHeight;
        let winWidth = res.windowWidth;
        console.log(winWidth);
        _this.setData({
          winWidth: winWidth,
          winHeight: winHeight
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})