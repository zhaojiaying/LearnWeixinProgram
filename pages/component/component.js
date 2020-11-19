// pages/viewInfo/viewInfo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imagePath: ''
	},

	click(){
		this.setData({
			isLoading: true
		})
	},

	onContact(e){
		console.log(e)
	},
	onGetPhoneNumber(e){
		console.log(e)
	},
	onGetUserInfo(e){
		console.log(e)
	},

	/* 选择相册图片 */
	handleChooseAlbum(){
		console.log('......');
		wx.chooseImage({
			success: res => {  //如果使用function(res){....this不能指代page } , 需要使用 res=>
				console.log(res)
				//1.取出路径
				const path = res.tempFilePaths[0]
				//设置变量值
				this.setData({
					imagePath: path
				})
			},
		})
	},

	handleImageLoad(){
		console.log('图片加载完成')
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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