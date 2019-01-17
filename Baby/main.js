//获得此扩展当前运行的环境：
//$env.today通知中心小组件
//$env.app	主应用
if ($app.env == $env.today) {
    var app = require('scripts/today')
}else if ($app.env == $env.app){
    var app = require('scripts/app')
}