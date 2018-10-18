
Zayer-miniprogram自定义组件说明文档：

Zayer-flod折叠栏组件
++++++++++++++++++++
1.在引入页面的json文件中定义
"usingComponents": {
    "zayer-flod" : "组件存放路径/zayer-flod/index"
}

2.在wxml页面中直接调用
<zayer-flod title="折叠栏标题" expand="{{true}}" withIcon="{{ true }}" withAttach="{{ true }}" stopFlod="{{ false }}">
	<image slot="icon" src="" />
	<text slot="title_right" >备注信息</text>
	<view slot="content">
	  -----------
	  折叠内容区域
	  -----------
	</view>
</zayer-flod>

3.属性变量备注：
expand:	Boolean		默认false，是否展开
withIcon: Boolean	默认false，是否带图标
withAttach: Boolean	默认false，是否附带右侧按钮或备注
stopFlod: Boolean	默认false，是否禁止展开

4.多slot说明
可自定义图标，需声明带slot="icon"的wxml结构
<image slot="icon" src="" />
可自定义右侧附属信息，如文字或按钮，需声明slot="title_right"的wxml结构
<text slot="title_right" >备注信息</text>
折叠内容定义
<view slot="content">
	内容
</view>



Zayer-table普通表格组件
+++++++++++++++++++++++
1.在引入页面的json文件中定义
"usingComponents": {
    "zayer-table": "../../component/zayer-table/index"
}

2.在wxml页面中直接调用
<zayer-table table="{{ demoTable }}" custom-class="myClass"></zayer-table>

3.在wxml页面对应的js文件中定义
data: {
	demoTable: {
      thead: [
        { title: "姓名", col: "name" },
        { title: "年龄", col: "age" },
        { title: "性别", col: "gender" },
        { title: "地址", col: "address" },
      ],
      tbody: [
        { name: "heavent", age: 24, gender: "男", address: "深圳" },
        { name: "lucy", age: 23, gender: "女", address: "广州"  },
        { name: "jeremy", age: 22, gender: "男", address: "惠州"  },
        { name: "tommy", age: 22, gender: "男", address: "东莞"  }
      ]
    }
}

4.属性说明
table: 需要渲染成表格的数据对象
custom-class: 自定义样式


Zayer-mask遮罩弹出层组件
++++++++++++++++++++++++
1.在引入页面的json文件中定义
"usingComponents": {
    "zayer-mask": "../../component/zayer-mask/index"
}

2.在wxml页面中直接调用
<zayer-mask show="{{ showFlag }}" custom-class="demoClass">
  <view slot="title">标题</view>
  <view slot="dialog">
	内容
  </view>
</zayer-mask>

3.在wxml页面对应的js文件中定义
data: {
	showFlag: true
}

4.属性说明
show: Boolean 是否显示遮罩层
custom-class: 自定义属性

5.多slot说明
title：标题wxml结构
dialog：主要显示内容wxml结构
