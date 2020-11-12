/*** 注册App时一般做什么：
   * 1.判断小程序的进入场景
   * 2.监听生命周期
   * 3.App()实例只有一个，并且是全局共享的单例对象 */

//app.js 调用App({})是生成一个小程序
App({
  //小程序生命周期，onLaunch，onShow，onHide，onError
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('小程序初始化完成：onLaunch')
    console.log(options)
    //异步调用
    //获取用户信息
    wx.getUserInfo({
      //success是数据拿到之后，再进行回调的
      success: function(res){
        console.log(res)
      }
    })
    setTimeout(function(){
      //const error = new Error()
      //throw error
    },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来：onShow')
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
      default:
        console.log('新的小程序进入场景')
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行：onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序初始化完成：onError')
  },

  /**
   * 页面不存在的监听函数
   */
  onPageNotFound:function(){
    console.log('页面不存在的监听函数')
  },

  globalData: {
    globleName: 'Hello World',
    globleAge: 20
  }

})

