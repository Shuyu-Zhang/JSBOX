var wid = $device.info.screen.width
var file = $file.read("Setting.conf")
var day_clac = (new Date()).toLocaleDateString()// 获取当前日期
var day_dis = displaydate(day_clac)// 显示当前日期
var DEFAULT_ = [day_dis, day_clac, "", 0, "", "", ""]//设置默认日期
var SETTING_ = (typeof file == "undefined") ? JSON.parse(JSON.stringify(DEFAULT_)) : JSON.parse(file.string)//获取Setting.conf的数据



   