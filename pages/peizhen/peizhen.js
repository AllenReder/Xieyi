// pages/peizhen/peizhen.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: "haha",
        dataList: [] // 存储JSON数据的数组
    },
    onItemClick: function (event) {
        var index = event.currentTarget.dataset.index; //使用event.currentTarget.dataset.XX获取内容
        wx.navigateTo({
            url: '/pages/peizhen/detail?index='+index, // 新页面的路径
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            dataList: app.yiyuan // 将获取到的JSON数据赋值给dataList
        });
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