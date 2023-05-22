// pages/index/wrapper/wrapper.js
Component({
  data: {
    activeValues: [0],
  },
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
  },
});