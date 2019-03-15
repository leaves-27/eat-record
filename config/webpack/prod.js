var webpack = require('webpack');
var argv = require('yargs').argv;
var env = process.env.NODE_ENV;

module.exports = {
  entry : {
      app :['./src/client/index'],
      vendor : ["jquery","bootstrap"],
      reacts : ['react','react-dom','react-redux',"react-router","react-router-redux"]
  },
  resolve : {
      alias: {
          jquery: jquery,
          bootstrap: path.join(__dirname,"node_modules/bootstrap/dist/js/bootstrap.min.js")
      }
  },
  module : {
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
      }]
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name : ['vendor','reacts'],
          filename: '[name].js'
      }),
      new ExtractTextPlugin("bundle.css"),
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': "'"+ env +"'"
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
  ],
  output: {
      path : path.resolve(__dirname,`build/${package.name}/dist`),
      filename : 'app.js',
      publicPath :"/static/",
      chunkFilename : '[name].js'
  }
};
