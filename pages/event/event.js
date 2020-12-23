// pages/event/event.js
//登录，可以拿到app.js中的token
const app = getApp();
app.globalData.token;

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		titles:['衣服','裤子','鞋子']
	},

	//按钮点击事件
	handleBtnClick(){
		console.info('点击了一次按钮');
	},

	handleTouchStart(){
		console.info('handleTouchStart');
	},
	handleTouchMove(){
		console.info('handleTouchMove');
	},
	handleTouchEnd(){
		console.info('handleTouchEnd');
	},
	handleTap(){
		console.info('handleTap');
	},
	handleLongpress(){
		console.info('handleLongpress');
	},

	handleEventClick(event){
		console.log('-----------', event);
	},
	handleEventEnd(event){
		console.log('+++++++++++', event);
	},

	handleOuter(event){
		console.log('outer: ',event);
	},
	handleInner(event){
		console.log('inner: ',+event);
	},

	handleItemClick(event){
		console.log(event);
		const dataset = event.currentTarget.dataset;
		const title = dataset.item;
		const index = dataset.index;
		console.log(title, index);
	},


	/**
	 * 事件捕获 和 事件冒泡
	 */
	handleCaptureView1(){
		console.log('handleCaptureView1');
	},
	handleBindView1(){
		console.log('handleBindView1');
	},
	handleCaptureView2(){
		console.log('handleCaptureView2');
	},
	handleBindView2(){
		console.log('handleBindView2');
	},
	handleCaptureView3(){
		console.log('handleCaptureView3');
	},
	handleBindView3(){
		console.log('handleBindView3');
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options);
	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		//1.获取首页的页面对象, getCurrentPages返回当前所有活跃的页面(当前栈的页面)
		const pages = getCurrentPages();
		const home = pages[pages.length-2];
		//2.调用页面对象的setData，通过修改数据的形式，间接的给他传递数据
		home.setData({
			title:'呵呵呵'
		})
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