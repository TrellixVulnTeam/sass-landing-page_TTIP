const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pathsToClean = [ 'dist'];
const cleanOptions = { 
    root: __dirname, verbose: true, 
    dry: false, exclude: [],
};

module.exports = {
watch: true,
entry: {
    main: path.resolve(__dirname, './js/myjs.js'),
    },
    output: {
        filename: 'compiled.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
              {
                  test: /\.(png|jpg|jpeg|svg|gif)$/i,
                  type: 'asset/resource',
                  generator : {
                    filename : '[name][ext][query]',
                  }
                },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'compiled.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
          })
    ]

};