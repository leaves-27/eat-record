var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var argv = require('yargs').argv;
var commonConfig = require("./config");

var clientConfig = {
  entry:commonConfig.entry.client,
  resolve:commonConfig.resolve.client,
  devtool:'cheap-source-map',
  module:{
    loaders:commonConfig.loaders.client
  },
  plugins : commonConfig.plugins.client,
  output: commonConfig.outPath.client
};

var serverConfig = {
  entry : commonConfig.entry.server,
  node : commonConfig.nodeConfig,
  target:'node',
  devtool: 'cheap-source-map',
  module : {
    loaders : commonConfig.loaders.server
  },
  externals : commonConfig._externals(),
  output: commonConfig.outPath.server
};

module.exports = commonConfig.getEndConfig(argv.compile,clientConfig,serverConfig);