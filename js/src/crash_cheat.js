//崩溃欺骗
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/uploadsImage/favicon_err.ico");
        document.title = '页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/uploadsImage/favicon_back.ico");
        document.title = '突然又好了~' + OriginTitle;
        titleTime = setTimeout(function () {
            $('[rel="icon"]').attr('href', "/images/favicon-32×32.ico");
            document.title = OriginTitle;
        }, 2000);
    }
});