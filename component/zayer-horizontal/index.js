// component/zayer-horizontal.js
Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    horizontal: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0,
  },
  ready: function () {
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
  /**
   * 组件的方法列表
   */
  methods: {
    _closeHorizontal: function (e) {
      this.setData({
        horizontal: false
      })
    }
  }
})
