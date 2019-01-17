//2
//var file = $file.read("Setting.conf")
//var day_clac = (new Date()).toLocaleDateString()// 获取当前日期
//var day_dis = displaydate(day_clac)// 显示当前日期

var wid = $device.info.screen.width
var DEFAULT_ = ["2018-12-17 06:05","2018-12-16T22:05:00.000Z","张钦云",1,"#FF9F01","#FA8D01","#409EF6","#2C86D9"] //设置数据
var SETTING_ = JSON.parse(JSON.stringify(DEFAULT_))//数据转换

var preview_ = {
  type: "view",
  props: {
    id: "preview_",
  },
  layout: $layout.fill,
  views: [{
      type: "view",
      layout: function(make, view) {
        make.centerY.equalTo(view.super)
        make.size.equalTo($size(200, 100))
      },
      views: [{
        type: "label",
        props: {
          id: "target_text",//姓名
          text: "张钦云",
          font: $font("bold", 25)
        },
        layout: function(make, view) {
          make.top.equalTo(view.super).offset(25)
          make.left.equalTo(view.super).offset(15)
        }
      }, {
        type: "label",
        props: {
          id: "target_date",//出生时间
          text: "2018-12-17 06:05",
          color: $color("#545455"),
          font: $font(13)
        },
        layout: function(make, view) {
          make.top.equalTo(view.prev.bottom).offset(2)
          make.left.equalTo(view.super).offset(15)
        }
      }]
    },{
      type: "label",
      props: {
        id: "days_1", 
        color: $color("white"),
        font: $font("AvenirNext-DemiBold", 30),
      },
      layout: function(make, view) {
        make.centerY.equalTo(view.super).offset(1)
        make.right.equalTo(view.super.right).offset(-58)
      }
    }]
}

$ui.render({
  layout: $layout.fill,
  views: [{
    type: "view",
    props: {
      id: "theme_c",
      radius: 5,
      bgcolor: $color(SETTING_[6]),
    },
    layout: function(make, view) {
      make.centerY.equalTo(view.super)
      make.right.equalTo(view.super).offset(-11)
      make.height.equalTo(40)
      make.width.equalTo(35)
    },
    views: [{
      tpye: "view",
      props: {
        id: "theme_c1",
        bgcolor: $color(SETTING_[7])
      },
      layout: function(make, view) {
        make.top.equalTo(view.super)
        make.right.equalTo(view.super)
        make.height.equalTo(40)
        make.width.equalTo(35)
      }
    }]
  }, {
    type: "view",
    layout: function(make, view) {
      make.centerX.equalTo(view.super)
      make.centerY.equalTo(view.super)
      make.size.equalTo($size(wid - 4, 100))
    },
    views: [preview_]
  }]
}) 


  $("days_1").text = clacdays(SETTING_[1])[0] > 99999 ? 99999 + "+" : clacdays(SETTING_[1])[0]


//计算天数
function clacdays(date) {
  var d_1 = new Date(date)
  var d_2 = new Date()
  var key_ = "已经"
  var key_1 = "生于"

  var t = Math.abs(d_1 - d_2);
  var d = Math.floor(t/1000/60/60/24);
  var h = Math.floor(t/1000/60/60%24);
  var m = Math.floor(t/1000/60%60);
  var s = Math.floor(t/1000%60);

  var days_ = d +"天"+ h +"时"+ m +"分"+ s +"秒"
  return [days_, key_, key_1]
}

//自适应天数背景
function bg_width() {
  var n = ($("days_1").text).length
  if ($("days_1").text === "今") {
    var n = 1.6
  }
  $("theme_c").updateLayout(function(make) {
    make.width.equalTo(n * 18.4 + 48)
  })
  if ($("target_key_").text === "已经") {
    $("theme_c").bgcolor = $color(SETTING_[4])
    $("theme_c1").bgcolor = $color(SETTING_[5])
  } else {
    $("theme_c").bgcolor = $color(SETTING_[6])
    $("theme_c1").bgcolor = $color(SETTING_[7])
  }
}
