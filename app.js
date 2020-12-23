/*** 注册App时一般做什么：
   * 1.判断小程序的进入场景
   * 2.监听生命周期
   * 3.App()实例只有一个，并且是全局共享的单例对象 */

const TOKEN = 'token';
//app.js 调用App({})是生成一个小程序
App({
  globalData: {
    token:''
  },
  //小程序生命周期，onLaunch，onShow，onHide，onError
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log('小程序初始化完成：onLaunch')
    // console.log(options)
    // //异步调用
    // //获取用户信息
    // wx.getUserInfo({
    //   //success是数据拿到之后，再进行回调的
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // setTimeout(function(){
    //   //const error = new Error()
    //   //throw error
    // },3000)

    //1. 先从缓冲中取出token
    const token = wx.getStorageSync(TOKEN);
    //2. 判断token是否有值
    if(token && token.length!==0){
      //已经有token，验证token是否过期
      this.checkToken(token);
    }else{
      //没有token，进行登录操作
      this.loginFunction();
    }

  },

   /** 检查token是否过期 */
  checkToken(token){
    wx.request({
      url:"后端服务器接口 http://127.0.0.1:8080/checktoken",
      method:'post',
      header:{
        token
      },
      success: (res) => {
        console.log(res);
        if(!res.data.errCode){
          console.log('token有效');
          this.globalData.token = token;          
        }else{
          this.loginFunction();
        }
      }
    })
  },

  loginFunction(){
    /** ========================== 登录操作 ====================== **/
    wx.login({
      //code只有5分钟的有效期
      success:(res)=>{
        //console.log("登录login",res)
        //1.获取code
        const code = res.code;
        //2.将code发送给服务器
        wx.request({
          url:'后端服务器接口http://127.0.0.1:8080/login',
          method:'post',
          data:{
            code
          },
          success:(res)=>{
            console.log(res)
            //1.取出token
            const token = res.data.token;
            //2.存储到全局变量中
            this.globalData.token = token;
            //3.存储到storage中
            wx.setStorageSync({
              data: token,
              key: TOKEN,
              success:function(res){
                console.log(res);
              }
            })
          }
        })
      }
    })
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

