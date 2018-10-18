Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['custom-class'],
  properties: {
    show: Boolean
  },
  data: {
  },
  ready: function () {
    console.error(this.data.show);
  },
  methods: {
    _toggle: function (e) {
      this.setData({
        show: !this.data.show
      })
    },
    _move: function (e) {
      //阻止父层滑动
    }
  }
})