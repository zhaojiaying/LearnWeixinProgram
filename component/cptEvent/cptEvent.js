// component/cptEvent/cptEvent.js
Component({
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
	 * 组件的方法列表,组件向页面传递自定义事件
	 * this.triggerEvent('方法名','数据',选项参数可传{}空)
	 */
	methods: {
		handleIncrement(){
			console.log('-----------');
			this.triggerEvent('increase',{name:"why", age:18},{});
		}
	}
})
