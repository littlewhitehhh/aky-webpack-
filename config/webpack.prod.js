//webpack.prod.js

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { resolveApp } = require("./path.js");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash:8].bundle.js",
        path: resolveApp("dist"),
        clean: true, //编译前清除目录
        pathinfo: false,
    },
    plugins: [new BundleAnalyzerPlugin()],
});