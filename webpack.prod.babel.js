var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var argv = require('yargs').argv;

var commonConfig = require("./config");

var plugins = {
  client:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};

for(var i=0;i<clientPlugins.length;i++){
  commonConfig.plugins.client.push(clientPlugins[i]);
}

var clientConfig = {
  entry : commonConfig.entry.client,
  resolve : commonConfig.resolve.client,
  module : {
    loaders: commonConfig.loaders.client
  },
  plugins:commonConfig.plugins.client,
  output: commonConfig.outPath.client
};

var serverConfig = {
  entry : commonConfig.entry.server,
  node : commonConfig.nodeConfig,
  target :'node',
  module : {
    loaders:commonConfig.loaders.server()
  },
  externals : commonConfig._externals(),
  output: commonConfig.outPath.server
};

module.exports = commonConfig.get(argv.compile,clientConfig,serverConfig);