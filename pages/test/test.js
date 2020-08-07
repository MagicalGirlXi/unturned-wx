//logs.js
var localData = require('../../resources/json.js')

Page({
  data: {
  },
  onLoad: function () {
    this.setData({
      showJsonList: localData.testJson
    })
  }
})
