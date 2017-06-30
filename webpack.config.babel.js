var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require('path');
var fs = require("fs");
var jsonObj = JSON.parse(fs.readFileSync('./package.json'));
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.NODE_ENV;

var config = {
  entry : {
    app :['./src/client/index'],
    vendor : ["jquery","bootstrap"],
    reacts : ['react','react-dom','react-redux',"react-router","react-router-redux"] 
  },
  module:{
    loaders:[{
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
      },
      { 
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      },
      {
        test: /\.js?$/,
        loader:'babel-loader',
        query:{
          presets:[
            "es2015",
            "stage-0",
            "react"
          ]
        },
        exclude: path.join(__dirname,"/node_modules/"),
        include: path.join(__dirname,"src")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css?-url")
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader","css?-url!stylus-loader")
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name : ['vendor','reacts'],
      filename: '[name].js'
    }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'"+env+"'"
      }
    })
  ],
  output: {
    path : 'dist',
    filename : 'app.js',
    publicPath :"/static/",
    chunkFilename : '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

module.exports = config;