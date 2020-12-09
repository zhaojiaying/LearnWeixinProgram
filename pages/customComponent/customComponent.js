// pages/about/about.js
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