var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var fs = require("fs");
var rootDir = process.cwd();
var jquery = path.join(rootDir,"node_modules/jquery/dist/jquery.min.js");

var packagePath = `${process.cwd()}/package.json`;
var cwd = process.cwd();
var package = JSON.parse(fs.readFileSync(packagePath));
var env = process.env.NODE_ENV;

function getExternals() {
    var manifest = require(packagePath);
    var dependencies = manifest.dependencies;
    var externals = {};
    for (var p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }

    return externals;
}

module.exports = {
  entry: {
      app :['./src/index'],
      vendor : ["jquery","bootstrap"],
      reacts : ['react','react-dom','react-redux',"react-router","react-router-redux"]
  },
  resolve: {
      alias: {
          jquery: jquery,
          bootstrap: path.join(rootDir,"node_modules/bootstrap/dist/js/bootstrap.min.js")
      }
  },
  module:{
    loaders: [{
        test: require.resolve(jquery),
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
        exclude: path.join(rootDir,"/node_modules/"),
        include: path.join(rootDir,"src")
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css?-url")
    },
    {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader","css?-url!stylus-loader")
    }],
  },
  plugins : [
      new webpack.optimize.CommonsChunkPlugin({
          name : ['vendor','reacts'],
          filename: '[name].js'
      }),
      new ExtractTextPlugin("bundle.css"),
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': "'" + env + "'"
          }
      })
  ],
  output: {
      path : path.resolve(rootDir,`build/${package.name}/dist`),
      filename : 'app.js',
      publicPath :"/static/",
      chunkFilename : '[name].js'
  },
  _externals: getExternals(),
  devServer: {
      contentBase: "../../build"
  }
};
