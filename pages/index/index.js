//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showMask: false,
    horizontal: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    demoTable: {
      thead: [
        { title: "姓名", col: "name" },
        { title: "年龄", col: "age" },
        { title: "性别", col: "gender" },
        { title: "地址", col: "address" }
      ],
      tbody: [
        { name: "heavent", age: 24, gender: "男", address: "深圳" },
        { name: "lucy", age: 23, gender: "女", address: "广州"  },
        { name: "jeremy", age: 22, gender: "男", address: "惠州"  },
        { name: "tommy", age: 22, gender: "男", address: "东莞"  }
      ]
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  horizontalScreen: function (e) {
    this.setData({
      horizontal: true
    })
  },
  mask: function (e) {
    this.setData({
      showMask: true
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
