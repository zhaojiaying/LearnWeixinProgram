// pages/about/about.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  handleIncrement(event){
    console.log('----',event);
    this.setData({
      counter: this.data.counter+1
    })
  },

  handleTabClick(event){
    console.log(event.detail.index, event.detail.title);
  },

  /**
   * 直接选中组件修改数据/调用方法
   */
  handleIncreaseButton(){
    console.log('-----------');
    //最终目的：修改myCpt3组件中的counter数据
    //1.拿到组件对象,通过给组件标签绑定一个类或者id, this.selectComponent('class/id')
    //1.1 通过class拿
    const my_cpt3 = this.selectComponent(".cpt3-class");
    //1.2 通过id拿
    const my_cpt31 = this.selectComponent("#cpt3");
    console.log(my_cpt3,my_cpt31);
    const counter = my_cpt3.data.cptCount;
    console.log(counter);
    //2.利用组件的setdata方法修改
    my_cpt3.setData({
      cptCount:my_cpt3.data.cptCount+20
    })
  },

  /**
   * 生命周期函数--监听页面加载
   *   url:开发者服务器接口地址
   *   data:请求的参数
   *   header:设置请求的header，header中不能设置Referer，content-type默认为application/json文件中
   *   method:HTTP请求方法，GET/POST
   *   dataType：返回的数据格式
   *   responseType：响应的数据类型
   *   success：接口调用成功的回调函数
   *   fail：接口调用失败的回调函数
   *   complete：接口调用结束的回调函数
   */
  onLoad: function (options) {
    //1、------------------原生方法发送网络请求-----------------------
    //this.getData_origin();

    //2、-----封装方法：通过network.js中的request方法发送网络请求-------
    //promise最大的好处就是防止出现回调地域
    request({
      url:"http://www.baidu.com"
    }).then(
      res=>{
        console.log(res)
      }
    ).catch(
      err=>{
        console.log(err)
      }
    )
  },

  //原生方法：发送网络请求,success回调函数
  getData_origin(){
    //1.发送最简单的get请求
    wx.request({
      url: 'http://www.baidu.com/s',
      success:function(res){
        console.log("request-success------",res);
      }
    })
    //2.get请求，并携带参数
    wx.request({
      url: 'http://www.baidu.com/s',
      data:{
        wd:'微信'
      },
      success:function(res){
        console.log("request-success------",res);
      }
    })
    //3.post请求，并携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',
      data:{
        name: "小明",
        age: 18
      },
      success:function(res){
        console.log("request-success------",res);
      },
      fail:function(err){
        console.log(err);
      }
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

  },


  /**小程序中展示弹框有四种方式*/
  onToastClick(){
    wx.showToast({
      title: '你好啊',
      duration:3000,
      icon:"loading",
      success:function(){
        console.log('展示成功')
      },
      fail:function(){
        console.log("展示失败")
      },
      complete:function(){
        console.log("展示完成")
      }
    })
  },

  onModalClick(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容，哈哈哈',
      //showCancel: false,是否显示取消按钮
      //cancelText修改取消的显示文本
      cancelText: '退出',
      cancelColor: '#ff8800',
      success:function(res){
        if(res.confirm){
          console.log('用户点击了确定');
        }
        if(res.cancel){
          console.log('用户点击了取消');
        }
      }
    })
  },

  onLoadingClick(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    //设置定时器 ，wx.hideLoading()调用loading消失
    setTimeout(
      ()=>{
        //必须手动hideLoading才会让loading消失
        wx.hideLoading()
      },
      2000
    )
},

  onActionSheetClick(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'blue',
      success: function(res){
        console.log(res);
      }
    })
  }


})