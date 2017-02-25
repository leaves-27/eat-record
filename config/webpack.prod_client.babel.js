var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require("path");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require("fs");
var jsonObj = JSON.parse(fs.readFileSync('./package.json'));

var vendor = {
  jquery:path.join(__dirname,"bower_components/jquery/dist/jquery.min.js"),
  bootstrap:path.join(__dirname,"bower_components/bootstrap/dist/js/bootstrap.min.js")
};

module.exports = {
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
        'NODE_ENV': '"production"'
      }
    })
  ],
  output: {
    path : path.resolve(__dirname,`/build/${jsonObj.name}/dist`),
    filename: '[name].js',
    publicPath:"static",
    chunkFilename: '[name].js'
  }
};