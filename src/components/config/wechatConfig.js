/**
 * author loins
 * time 20181220
 * 判断是否为微信环境
 */

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
const isWechat = () => {
    let ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}
var wechatConfig  = {
    authorizationPage:function(_config,params){
        if(isWechat()){
            debugger
            console.log(_config.wechatCode)
            console.log('loins提醒：当前环境为微信环境');
            if(!localStorage.getItem('wechatCode')){
                if(window.location.href.split('code').length == 1){
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${_config.wechatConfig.appID}&redirect_uri=${_config.wechatConfig.redirectUrl}&response_type=code&scope=snsapi_userinfo&state=state#wechat_redirect`
                }else{
                    localStorage.setItem('wechatCode',getQueryString('code'));
                }
            }
            
        }else{
            console.log('loins提醒：当前环境为非微信环境');
           
            
        }
        console.log('config',_config)
    }
}

export default wechatConfig;