// pages/style/style.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		message: '你好，小程序',
		firstname: 'Kebo',
		lastname: 'Bryant',
		age:17,
		nowTime: new Date().toLocaleString(),
		time: 1560598160,
		isActive: false,
		inputShowed: false,
		inputVal: "",
		score:51,
		movies:['星际穿越','盗梦空间','大话西游'],
		nums:[
			[10,14,11,18],
			[20,24,21,28],
			[30,34,31,38]
		],
		letters:[
			{id:'a',name:'A'},
			{id:'b',name:'B'},
			{id:'c',name:'C'}
		]
	},
	showInput: function () {
			this.setData({
					inputShowed: true
			});
	},
	hideInput: function () {
			this.setData({
					inputVal: "",
					inputShowed: false
			});
	},
	clearInput: function () {
			this.setData({
					inputVal: ""
			});
	},
	inputTyping: function (e) {
			this.setData({
					inputVal: e.detail.value
			});
	},

	onIncrement(){
		this.setData({
			score: this.data.score+5
		})
	},

	onDecrement(){
		this.setData({
			score: this.data.score-2
		})
	},

	switchColor(){
		console.info('点了一下切换颜色按钮');
		this.setData({
			isActive:!this.data.isActive
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 * setInterval 按照指定的周期（以毫秒计）来调用函数或计算表达式,不停的调用函数
	 */
	onLoad: function (options) {
		setInterval(()=>{
			this.setData({
				nowTime: new Date().toLocaleString()
			})
		},1000)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})