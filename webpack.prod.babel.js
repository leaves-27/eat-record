var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var jsonObj = JSON.parse(fs.readFileSync('./package.json'));
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ZipPlugin = require('zip-webpack-plugin')

function _externals() {
  var manifest = require('./package.json');
  var dependencies = manifest.dependencies;
  var externals = {};
  for (var p in dependencies) {
      externals[p] = 'commonjs ' + p;
  }

  return externals;
}

var outDir = __dirname+"/build/eat-record";

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
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/server.js',
      to:outDir,
      force:true
    },{
      from: __dirname + '/dist/**/*',
      to:outDir,
      force:true
    }])
  ],
  externals: _externals(),
  output: {
    path: path.resolve(__dirname,''),
    filename: 'server.js'
  }
};

// new ZipPlugin({
//       path:path.join(__dirname,'/build'),
//       filename: 'dist.zip'
//     })