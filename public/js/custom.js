var OriginTitile = document.title;
var jiao;

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === undefined || document.visibilityState === 'visible') {
        document.title = '(^∇^*)欢迎肥来！' + OriginTitile;
        jiao = setTimeout(function () {
            document.title = OriginTitile;
        }, 4000);
    } else {
        document.title = '不要走！再看看嘛(ﾟДﾟ)';
        clearTimeout(jiao);
    }
});
