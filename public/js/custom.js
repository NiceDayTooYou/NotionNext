var OriginTitile=document.title,jiao;
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        document.title = '不要走！再看看嘛';
        clearTimeout(jiao);
    } 
    else {
        document.title = '欢迎肥来！'+ OriginTitile;
        jiao=setTimeout(function(){
            document.title=OriginTitile;
        },4000);
    }
});
