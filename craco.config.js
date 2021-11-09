/*
 * @Author: your name
 * @Date: 2021-11-08 19:33:11
 * @LastEditTime: 2021-11-09 14:42:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/craco.config.js
 */
const CracoVtkPlugin = require("craco-vtk");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
    // plugins: [
    //   //打包分析
    //   // new BundleAnalyzerPlugin(),
    //   // 打压缩包
    //   new CompressionWebpackPlugin({
    //     algorithm: "gzip",
    //     test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
    //     threshold: 1024,
    //     minRatio: 0.8,
    //   }),
    //   //
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         warnings: false,
    //         drop_debugger: true,
    //         drop_console: true,
    //       },
    //     },
    //     sourceMap: false,
    //     parallel: true,
    //   }),

    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //   new SimpleProgressWebpackPlugin(),
    // ],
    //抽离公用模块
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       commons: {
    //         chunks: "initial",
    //         minChunks: 2,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //       },
    //       vendor: {
    //         test: /node_modules/,
    //         chunks: "initial",
    //         name: "vendor",
    //         priority: 10,
    //         enforce: true,
    //       },
    //     },
    //   },
    // },
  },
  // babel: {
  //   plugins: [
  //     ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
  //     ["@babel/plugin-proposal-decorators", { legacy: true }],
  //   ],
  // },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://jd.com",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  // },
  // plugins: [
  //   {
  //     plugin: CracoVtkPlugin(),
  //   },
  // ],
};
