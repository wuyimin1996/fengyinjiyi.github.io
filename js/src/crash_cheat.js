var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="icon"]').attr("href","/uploadsImage/favicon_err.ico"),document.title="页面崩溃啦 ~",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/uploadsImage/favicon_back.ico"),document.title="突然又好了~"+OriginTitle,titleTime=setTimeout(function(){$('[rel="icon"]').attr("href","/images/favicon-32×32.ico"),document.title=OriginTitle},2e3))});