// pages/viewInfo/viewInfo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imagePath: '',
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
		},{
      mode: 'widthFix',
      text: 'widthFix: 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变'
    },{
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: '../../assets/pic/cat.jpg'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
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

	handleInput(event){
		console.log('用户输入内容',event);
	},

	handleFocus(event){
		console.log('input获取焦点',event);
	},

	handleBlur(event){
		console.log('input失去焦点',event);
	},

	//用的最多得属性是 event.detail.scrollTop
	handleScroll(event){
		console.log('正在滚动',event);
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