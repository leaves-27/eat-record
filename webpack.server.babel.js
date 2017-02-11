var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

function _externals() {
  var manifest = require('./package.json');
  var dependencies = manifest.dependencies;
  var externals = {};
  for (var p in dependencies) {
      externals[p] = 'commonjs ' + p;
  }

  return externals;
}

module.exports = {
  entry:{
    server:'./src/server/index.js'
  },
  node:{
    console:true,
    __filename:true,
    __dirname:true
  },
  target:'node',
  devtool: 'cheap-source-map',
  module:{
    loaders: [{
      test: /\.js?$/,
      loader:'babel',
      query:{
        presets:["es2015","stage-0","react"]
      },
      exclude: /node_modules/,
      include: path.join(__dirname,"src")
    },
    {
      test: /\.styl$/,
      loader: "style-loader!css-loader!stylus-loader"
    }]
  },
  externals:_externals(),
  output: {
    path: `${__dirname}/build/`,
    filename: 'server.js'
  }
};