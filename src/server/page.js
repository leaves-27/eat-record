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
  <title>test</title>
  <link rel="stylesheet" href="/static/bundle.css" />
</head>
<body>
  <h1>${ message }</h1>
  <h2>${ error.status }</h2>
  <pre>${ error.stack }</pre>
</body>
</html>
`;

export const main = (__html__,state) => `
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
  <title>test</title>
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
<script type="text/javascript" src="/static/bundle.js"></script>
</body>
</html>
`;