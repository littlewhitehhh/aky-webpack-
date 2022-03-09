//webpack.dev.js

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { resolveApp } = require("./path.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: "[name].bundle.js",
        path: resolveApp("dist"),
        pathinfo: false,
        clean: true, //编译前清除目录
    },
    devServer: {
        //告诉服务器从哪里提供内容，只有在你想要提供静态资源文件时才需要
        static: {
            directory: resolveApp("dist"),
        },
        port: 8880,
        hot: true,
    },
});