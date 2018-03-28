const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require("fs");

var fileContent = fs.readFileSync('./package.json');
var packageJSON = JSON.parse(fileContent);
var dirPath = 'build/'+packageJSON.name;
// const domain = require("./src/domain");

let publicPath = "localhosts:3000/";

module.exports =  {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, dirPath),
    publicPath: "/",
    filename: 'static/[name].js',
    chunkFilename:'static/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query:{
          presets:["es2015","stage-0","react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },{ 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },{
        test: /\.styl$/, 
        loader: 'style-loader!css-loader!stylus-loader' 
      },{ 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file-loader" 
      },{ 
        test: /\.(woff|woff2)$/, 
        loader:"url-loader?prefix=font/&limit=5000" 
      },{ 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
      },{ 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
      },{
        test: require.resolve('jquery'),
        use:[{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  devServer: {
    contentBase: dirPath,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    filename: 'static/[name].[chunkhash:8].js',
    disableHostCheck: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename : "index.html", //生成的html文件名
      template : "./src/index.html", //生成html依赖的模板
      inject : true, //自动注入资源
      minify : { 
        removeComments : true,    //移除HTML中的注释
        collapseWhitespace : true    //删除空白符与换行符
      }
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ])
}else if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}