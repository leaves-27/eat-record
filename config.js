var webpack = require('webpack');
var path = require("path");
var fs = require("fs");
var jsonObj = JSON.parse(fs.readFileSync('./package.json'));
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.NODE_ENV;
var compileJSConfig = {
  test: /\.js?$/,
  loader:'babel',
  query:{
    presets:["es2015","stage-0","react"]
  },
  exclude: path.join(__dirname,"/node_modules/"),
  include: path.join(__dirname,"src")
}


var vendor = {
  jquery:path.join(__dirname,"bower_components/jquery/dist/jquery.min.js"),
  bootstrap:path.join(__dirname,"bower_components/bootstrap/dist/js/bootstrap.min.js")
};

var clientLoaders = [{
  test: require.resolve(vendor.jquery),
  loader: 'expose?jQuery!expose?$'
},
{ 
  test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
  loader: 'url-loader?limit=50000&name=[path][name].[ext]'
},
compileJSConfig,
{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract("style-loader","css-loader")
},
{
  test: /\.styl$/,
  loader: ExtractTextPlugin.extract("style-loader","css-loader!stylus-loader")
}];

var _externals = function() {
  var manifest = require('./package.json');
  var dependencies = manifest.dependencies;
  var externals = {};
  for (var p in dependencies) {
      externals[p] = 'commonjs ' + p;
  }

  return externals;
}

/*
** 自定义webpack参数：
** 为webpack自定义了一个compile命令，用来表明是编译客户端代码还是编译服务器端,其有两个值：server和client。
** 调用方式如下：
**    webpack --compile server
** 
**/
var getEndConfig = function(argv,clientConfig,serverConfig){
  var config;
  if(argv == "server") {
    config = serverConfig;
  }else{
    config = clientConfig;
  }

  return config;
}

module.exports = {
  env : env,
  entry:{
    client : {
      app:['./src/client/index'],
      vendor:["jquery","bootstrap",'react','react-dom','react-redux',"react-router","react-router-redux"] 
    },
    server :'./src/server/index.js'
  },
  outPath:{
    client:{
      path : path.resolve(__dirname,`build/${jsonObj.name}/dist`),
      filename : 'app.js',
      publicPath :"static/",
      chunkFilename : '[name].js'
    },
    server:{
      path: path.resolve(__dirname,`build/${jsonObj.name}/`),
      filename: 'server.js',
      chunkFilename: '[name].js'
    }
  },
  loaders:{
    client : clientLoaders,
    server :  [compileJSConfig]
  },
  plugins:{
    client : [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
        filename: 'vendor.js'
      }),
      new ExtractTextPlugin("bundle.css"),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': "'"+env+"'"
        }
      })
    ]
  },
  resolve:{
    client:{
      alias: {
        jquery:vendor.jquery,
        bootstrap:vendor.bootstrap
      }
    }
  },
  nodeConfig:{
    console:true,
    __filename:true,
    __dirname:true
  },
  _externals : _externals,
  getEndConfig : getEndConfig
};