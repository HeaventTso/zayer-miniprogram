Component({
  externalClasses: ['custom-class'],
  properties: { 
    tbodyHeight: {
      type: String,
      value: "50vh"
    },
    table: {
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {
        thead: [],
        ttbody: []
      }, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    }
  },
  data: {},
  ready: function () {
    this.setData({
      table: this._headtbodymapping(this.data.table)
    })
  },
  methods: {
    _headtbodymapping: function (data) {
      var thead = data.thead || [];
      var formatData = {
        thead: [],
        tbody: []
      };
      for (var item of thead) {
        formatData.thead.push({
          content: item.title
        })
      }
      var row = 0;
      var tbody = data.tbody || [];
      for (var rowitem of tbody) {
        var rowData = [];
        for (var colItem of thead) {
          rowData.push({
            content: rowitem[colItem.col],
          })
        }
        formatData.tbody.push(rowData);
        row++;
      }
      return formatData;
    }
  }
})