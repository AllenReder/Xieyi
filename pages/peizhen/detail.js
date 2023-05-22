// pages/peizhen/detail.js

const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        index: 0,
        data: {},
    },

    clickButton: function () {
        wx.navigateTo({
            url: '/pages/peizhen/userinfo?index=' + this.data.index,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            index: options.index,
            data: app.yiyuan[options.index]
        });
        console.log(this.data.index);
        console.log(this.data.data);
        // this.data.data = app.yiyuan[int(options.index)]; //解析得到对象
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})