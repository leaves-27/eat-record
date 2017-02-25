var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require("path");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require("fs");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ZipPlugin = require('zip-webpack-plugin');
var argv = require('yargs').argv;

var jsonObj = JSON.parse(fs.readFileSync('./package.json'));
var vendor = {
  jquery:path.join(__dirname,"bower_components/jquery/dist/jquery.min.js"),
  bootstrap:path.join(__dirname,"bower_components/bootstrap/dist/js/bootstrap.min.js")
};
var outDir = __dirname+"/build/eat-record";
var env = process.env.NODE_ENV;

var clientConfig = {
  entry:{
    app:['./src/client/index'],
    vendor:["jquery","bootstrap",'react','react-dom','react-redux',"react-router","react-router-redux"] 
  },
  resolve:{
    alias: {
      jquery:vendor.jquery,
      bootstrap:vendor.bootstrap
    }
  },
  module:{
    loaders: [
    {
      test: require.resolve(vendor.jquery),
      loader: 'expose?jQuery!expose?$'
    },
    { 
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
      loader: 'url-loader?limit=50000&name=[path][name].[ext]'
    },
    {
      test: /\.js?$/,
      loader:'babel',
      query:{
        presets:["es2015","stage-0","react"]
      },
      exclude: /node_modules/,
      include: path.join(__dirname,"src")
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader","css-loader")
    },
    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract("style-loader","css-loader!stylus-loader")
    }]
  },
  plugins:[
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'"+env+"'"
      }
    })
  ],
  output: {
    path : path.resolve(__dirname,`build/${jsonObj.name}/dist`),
    filename: '[name].js',
    publicPath:"static",
    chunkFilename: '[name].js'
  }
};


var _externals = function() {
  var manifest = require('./package.json');
  var dependencies = manifest.dependencies;
  var externals = {};
  for (var p in dependencies) {
      externals[p] = 'commonjs ' + p;
  }

  return externals;
}

var serverConfig = {
  entry:{
    server:'./src/server/index.js'
  },
  node:{
    console:true,
    __filename:true,
    __dirname:true
  },
  target:'node',
  module:{
    loaders: [{
      test: /\.js?$/,
      loader:'babel',
      query:{
        presets:["es2015","stage-0","react"]
      },
      exclude: [
        path.resolve(__dirname, "node_modules"),
      ]
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: _externals(),
  output: {
    path: path.resolve(__dirname,`build/${jsonObj.name}`),
    filename: 'server.js'
  }
};

var config;
/*
** 自定义webpack参数：
** 为webpack自定义了一个compile命令，用来表明是编译客户端代码还是编译服务器端,其有两个值：server和client。
** 调用方式如下：
**    webpack --compile server
** 
**/

if(argv.compile == "server") {
  config = serverConfig;
}else{
  config = clientConfig;
}

module.exports = config;