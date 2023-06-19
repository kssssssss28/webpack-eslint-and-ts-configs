// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const baseConfig = {
 // 入口文件配置
 entry: './src/app/index.tsx',
 mode:"production",
 module: {
   rules: [
       {
           test: /\.css$/,
           use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
         },
     // less-loader
     {
       test: /\.less$/, // 匹配 .less 文件
       use: [
           MiniCssExtractPlugin.loader,
           "css-loader",
           "postcss-loader",
           "less-loader",
       ],
     },
     // ts-loader
     {
       test: /\.m?ts$|\.tsx?$/,
       exclude: /node-modules/, //不处理这个路径下的文件
       use: [
         // babel配置
         {
           // 加载器
           loader: "babel-loader",
           // 设置babel
           options: {
             // 预定义的环境设置
             presets:[
               [
                 // 指定环境的插件
                 "@babel/preset-env",
                 // 配置信息
                 {
                   // 要兼容的目标浏览器
                   targets: {
                     "chrome": "58",
                     "ie": "11",
                   },
                   // 指定core.js的版本
                   // corejs是用来向下兼容的 补充旧版本js没有的特性
                   // 3可以补充es678的特性 箭头函数 let class 解构赋值 promise...
                   "corejs": "3",
                   // 使用corejs的方式 “usage” 表示按需加载
                   "useBuiltIns": "usage"
                 }
               ]
             ],
             // 开启babel缓存
              // babel会把转移的文件保存在缓存 如果源文件不变 就不重新编译
             cacheDirectory: true
           }
         },
         'ts-loader'
       ],
     },
     {
       test: /\.png$/i,
       use: 'asset/resource'
     },
     {
       test: /\.ico$/i,
       use: 'asset/inline'
     },
     {
       test: /\.text$/i,
       use: 'asset/source'
     }
   ],
 },
 // 出口文件配置
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'main.js',
 },
 plugins: [new HtmlWebpackPlugin(), 
   new MiniCssExtractPlugin({
       filename: `[name].[hash:8].css`,
     }),
   new ESLintPlugin({
       fix: true, // 启用 ESLint 自动修复特性
       extensions: ['js', 'json', 'coffee','tsx'], // 需要排查的文件
       exclude: '/node_modules/' // 排除 node_module 的检查
     })],
     
};

module.exports = {
    baseConfig
  };