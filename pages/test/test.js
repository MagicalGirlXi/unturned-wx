//logs.js
var localData = require('../../resources/json.js')

Page({
  data: {
    searchName: null
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      showJsonList: localData.testJson,
      currentLei: localData.testJson[2]
    })
    wx.hideLoading()
  },
  onLeiClick: function(e) {
    var index = e.target.dataset.id;
    console.log(index)
    this.setData({
      currentLei: localData.testJson[parseInt(index)]
    })
  },
  onSearch: function(e) {
    let result = {
      "Name": "搜索结果",
      "Index": "-1",
      "Contain": []
    };
    console.log(e.detail.value);
    wx.showLoading({
      title: '搜索中',
    })
    
    for (let lei in this.data.showJsonList) {
      for (let item in this.data.showJsonList[lei].Contain)
      {
        //console.log(this.data.showJsonList[lei].Contain[item].CnName);
        if (this.data.showJsonList[lei].Contain[item].CnName.includes(e.detail.value))
        {
          result.Contain.push(this.data.showJsonList[lei].Contain[item]);
        }
      }
    }
    this.setData({
      currentLei: result
    })
    wx.hideLoading()
  }
})
