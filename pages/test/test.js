//logs.js
var localData = require('../../resources/json.js')

Page({
  data: {
  },
  onLoad: function () {
    this.setData({
      showJsonList: localData.testJson,
      currentLei: localData.testJson[2]
    })
  },
  onLeiClick: function(e) {
    var index = e.target.dataset.id;
    console.log(index)
    this.setData({
      currentLei: localData.testJson[parseInt(index)]
    })
  }
})
