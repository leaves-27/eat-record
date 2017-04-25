export const error = (message, error = {
  title: '404',
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="renderer" content="webkit" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  
  <!--定义添加到主屏幕的图标-->
  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="icon-57.png" />  
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="icon-72.png" />  
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="icon-114.png" />  
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="icon-144.png" /> 

  <!--定义启动动画-->

  <!--
  <link rel="apple-touch-startup-image" sizes="2048x1496" href="../client/imags/icon-2048x1496.png" media="screen and (min-device-width: 1025px) and (max-device-width: 2048px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio: 2)">  
  <link rel="apple-touch-startup-image" sizes="1536x2008" href="../client/icon-1536x2008.png" media="screen and (min-device-width: 1025px) and (max-device-width: 2048px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio: 2)">  
  <link rel="apple-touch-startup-image" sizes="1024x748" href="../client/icon-1024x748.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">  
  <link rel="apple-touch-startup-image" sizes="768x1004" href="../client/icon-768x1004.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">  
  <link rel="apple-touch-startup-image" sizes="640x920" href="../client/icon-640x920.png" media="screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)">  
  -->
  
  <!--定义应用是否全屏展示-->
  <meta name="apple-mobile-web-app-capable" content="yes" />  
  <!--设置状态栏的样式-->
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <!--是否启用或禁用自动检测在网页中可能出现的电话号码-->  
  <meta name="format-detection" content="telephone=no" />

  <title>秀的饮食记录本</title>
  <link rel="stylesheet" href="/static/bundle.css" />
  <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?6bb26bc0960077c4ccaf8af5f9791f88";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  </script>
</head>
<body>
  <h1>${ message }</h1>
  <h2>${ error.status }</h2>
  <pre>${ error.stack }</pre>
</body>
</html>
`;

export const main = (imgs,__html__,state) =>{
  return  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    
    <!--定义添加到主屏幕的图标-->

    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="${ imgs.mise }" />  
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="${ imgs.small }" />  
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="${ imgs.middle }" />  
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="${ imgs.big }" /> 

    <!--定义启动动画-->

    <!--
    <link rel="apple-touch-startup-image" sizes="2048x1496" href="../client/imags/icon-2048x1496.png" media="screen and (min-device-width: 1025px) and (max-device-width: 2048px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio: 2)">  
    <link rel="apple-touch-startup-image" sizes="1536x2008" href="../client/icon-1536x2008.png" media="screen and (min-device-width: 1025px) and (max-device-width: 2048px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio: 2)">  
    <link rel="apple-touch-startup-image" sizes="1024x748" href="../client/icon-1024x748.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">  
    <link rel="apple-touch-startup-image" sizes="768x1004" href="../client/icon-768x1004.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">  
    <link rel="apple-touch-startup-image" sizes="640x920" href="../client/icon-640x920.png" media="screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)">  
    -->
    
    <!--定义应用是否全屏展示-->
    <meta name="apple-mobile-web-app-capable" content="yes" />  
    <!--设置状态栏的样式-->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <!--是否启用或禁用自动检测在网页中可能出现的电话号码-->  
    <meta name="format-detection" content="telephone=no" />

    <title>秀的饮食记录本</title>
    <link rel="stylesheet" href="/static/bundle.css" />
  </head>
  <body>
    <div  id="root" class="root">
      <div>
        ${ __html__ }
      </div>
    </div>
  <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(state)};;
  </script>
  <script type="text/javascript" src="/static/reacts.js"></script>
  <script type="text/javascript" src="/static/vendor.js"></script>
  <script type="text/javascript" src="/static/app.js"></script>
  </body>
  </html>
  `;
}
