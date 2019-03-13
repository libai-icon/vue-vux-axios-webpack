var $utils = {
    getQueryString:function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },
    isWechat:function(){
        let ua = window.navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == 'micromessenger';
    }
}
export default $utils;