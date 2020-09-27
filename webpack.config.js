const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //CSS的打包

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'plugin demo',
          minify: true,
          filename: 'index.html',
          template: './src/1.html'
        }),
       
        new MiniCssExtractPlugin({
          filename: 'index.css',
        })
      ],
      optimization: {  
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
};