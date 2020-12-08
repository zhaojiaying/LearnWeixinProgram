// component/myCpt/myCpt.js

Component({
	/**
	 * 设置class是否可以相互影响
	 * styleIsolation："isolated" 表示组件和页面不相互影响
	 * styleIsolation: "apply-shared" 页面样式影响组件样式，组件不影响页面
	 * styleIsolation: "shared" 页面和组件相互影响
	 */
	options:{
		styleIsolation: "isolated"
	},

	/**
	 * 组件的属性列表：可以用于页面传递数据到组件
	 * observer观察监听属性的变化
	 */
	properties: {
		title: {
			type: String,
			value: '默认标题',
			observer: function(newVal, oldVal){
				console.log(newVal, oldVal);
			}
		},
		content: String
	},

	/**
	 * 页面传递样式给组件
	 */
	externalClasses:['titleclass'],

	/**
	 * 组件的初始数据
	 */
	data: {
		title: '我是标题',
		content: '我是组件的内容'
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
