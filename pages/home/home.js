// pages/home/home.js

//getApp()获取App()产生的实例对象
const app = getApp()
console.log(app)
console.log('哈哈哈')

//调用Page({})注册一个页面
/**
 * 调用Page({})一般做什么？
 * 1.生命周期函数
 * 2.初始化一些数据
 * 3.监听wxml中的事件
 * 4.其他的一些监听，如页面滚动、上拉刷新、下拉加载
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: 'jiaying',
    age: 18,
    students:[
      {id:110, name:'Mary', age:10},
      {id:111, name:'Jack', age:12},
      {id:112, name:'Tom', age:10},
      {id:113, name:'Jerry', age:12},
    ],
    counter:0,
    list:[]
  },

  add(){
    /** 这种方式界面不会进行counter显示值的刷新 */
    //console.log(this.data.counter)
    //this.data.counter ++
    this.setData({
      counter: this.data.counter+1
    })
  },

  sub(){
    this.setData({
      counter: this.data.counter-1
    })
  },

  handleGetUserInfo(event){
    console.log('处理点击获取授权按钮')
    console.log(event)

  },

  handleViewClick(){
    console.log('啦啦啦被点击了')
  },
  

  /**
   * 利用代码进行页面跳转
   */
  handlePushEvent(){
    wx.navigateTo({
      url: '/pages/event/event',
    })
  },

  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj.scrollTop)
  },

  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },

  //监听页面下来刷新
  onPullDownRefresh(){
    console.log('页面下拉刷新')
  },

  /**
   * ----------page的生命周期函数-----------
   */
  //页面加载
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'http://www.baidu.com',
      success:(res)=>{
        console.log(res)
        const data = res.errMsg
        this.setData({
          list: ['哈哈',res.errMsg]
        })
      }
    })
  },

  //页面显示
  onShow(){
    console.log('onShow')
  },

  //页面初次渲染完成
  onReady(){
    console.log('onReady')
  },

  //页面隐藏
  onHide(){
    console.log('onHide')
  },

  //页面卸载
  onUnload(){
    console.log('onUnload')
  }


})