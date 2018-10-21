# Zayer-miniprogram自定义组件说明文档：
***
## 一.Zayer-flod折叠栏组件

1. 在引入页面的json文件中定义

> "usingComponents": {  
> &emsp;&emsp;"zayer-flod" : "组件存放路径/zayer-flod/index"  
> }

2. 在wxml页面中直接调用

> &lt;zayer-flod title="折叠栏标题" expand="{{true}}" withIcon="{{ true }}" withAttach="{{ true }}" stopFlod="{{ false }}"&gt;  
>	&emsp;&emsp;&lt;image slot="icon" src="" /&gt;  
>	&emsp;&emsp;&lt;text slot="title_right" &gt;备注信息&lt;/text&gt;  
>	&emsp;&emsp;&lt;view slot="content"&gt;  
>	&emsp;&emsp;&emsp;&emsp;-----------  
>	&emsp;&emsp;&emsp;&emsp;折叠内容区域  
>	&emsp;&emsp;&emsp;&emsp;-----------  
>	&emsp;&emsp;&lt;/view&gt;  
> &lt;/zayer-flod&gt;  

3. 属性变量备注：  
***expand:	Boolean***&emsp;&emsp;默认false，是否展开  
***withIcon: Boolean***&emsp;&nbsp;默认false，是否带图标  
***withAttach: Boolean***&emsp;默认false，是否附带右侧按钮或备注  
***stopFlod: Boolean***&emsp;&emsp;默认false，是否禁止展开  
  
4. 多slot说明  
可自定义图标，需声明带 ***slot="icon"*** 的wxml结构  
&lt;image slot="icon" src="" />  
可自定义右侧附属信息，如文字或按钮，需声明 ***slot="title_right"*** 的wxml结构  
&lt;text slot="title_right" >备注信息</text>  
折叠内容定义  
&lt;view slot="content">  
	内容  
&lt;/view>  

***
## 二.Zayer-table普通表格组件
1. 在引入页面的json文件中定义

> "usingComponents": {  
> &emsp;&emsp;"zayer-table": "../../component/zayer-table/index"  
> }

2. 在wxml页面中直接调用  
> &lt;zayer-table table="{{ demoTable }}" tbodyHeight="100px" custom-class="demoClass"></zayer-table>

> <zayer-table table="{{ demoTable }}" custom-class="myClass"></zayer-table>

3. 在wxml页面对应的js文件中定义

> data: {  
>	&emsp;&emsp;demoTable: {  
> &emsp;&emsp;&emsp;&emsp;thead: [  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ title: "姓名", col: "name" },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ title: "年龄", col: "age" },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ title: "性别", col: "gender" },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ title: "地址", col: "address" },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;],  
> &emsp;&emsp;&emsp;&emsp;tbody: [  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ name: "heavent", age: 24, gender: "男", address: "深圳" },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ name: "lucy", age: 23, gender: "女", address: "广州"  },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ name: "jeremy", age: 22, gender: "男", address: "惠州"  },  
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ name: "tommy", age: 22, gender: "男", address: "东莞"  }  
> &emsp;&emsp;&emsp;&emsp;]  
> &emsp;&emsp;}  
> }  

4. 属性说明  
***table***: 需要渲染成表格的数据对象 
***tbodyHeight***: 表格内容的滚动高度，需要带上单位px、rpx、%、vh、vw
***custom-class***: 自定义样式  


***
## 三.Zayer-mask遮罩弹出层组件

1. 在引入页面的json文件中定义  

> "usingComponents": {  
> &emsp;&emsp;"zayer-mask": "../../component/zayer-mask/index"  
> }  

2. 在wxml页面中直接调用  

> &lt;zayer-mask show="{{ showFlag }}" custom-class="demoClass">  
> &emsp;&emsp;&lt;view slot="title">标题</view>  
> &emsp;&emsp;&lt;view slot="dialog">  
>	&emsp;&emsp;内容  
> &emsp;&emsp;&lt;/view>  
> &lt;/zayer-mask>  

3. 在wxml页面对应的js文件中定义    

> data: {  
>	&emsp;&emsp;showFlag: true  
> }  

4. 属性说明  
***show:*** 是否显示遮罩层  
***custom-class:*** 自定义属性  

5. 多slot说明  
***title***：标题wxml结构  
***dialog***：主要显示内容wxml结构  
