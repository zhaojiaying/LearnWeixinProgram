// component/myMultiSlot/myMulitSlot.js
Component({
	options:{
		multipleSlots:true
	},
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	},


	/**
	 * ------------------ 组件中监听生命周期函数 --------------------
	 */
	//1. 监听所在页面的生命周期
	pageLifetimes:{
		show(){
			console.log('监听组件所在页面显示出来')
		},
		hide(){
			console.log('监听组件所在页面隐藏起来时')
		},
		resize(){
			console.log('监听页面尺寸的改变')
		}
	}
	//2. 监听组件本身的生命周期
})
