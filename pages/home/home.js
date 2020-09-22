// pages/home/home.js
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
    counter:0
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
  }

})