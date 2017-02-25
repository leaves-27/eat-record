var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var jsonObj = JSON.parse(fs.readFileSync('./package.json'));

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
      exclude: [
        path.resolve(__dirname, "node_modules"),
      ]
    }]
  },
  externals: _externals(),
  output: {
    path: path.resolve(__dirname,`/build/${jsonObj.name}`),
    filename: 'server.js'
  }
};