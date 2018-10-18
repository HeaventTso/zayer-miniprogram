
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: String,
    expand: Boolean,
    withIcon : Boolean,
    withAttach: Boolean,
    stopFlod: Boolean
  },
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
    _toggle:function(e) {
      if (!this.data.stopFlod){
        this.setData({
          expand: !this.data.expand
        })
      }
    }
  },
  externalClasses: ['custom-class']
})