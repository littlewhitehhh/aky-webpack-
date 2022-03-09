//webpack.common.js

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const { resolveApp } = require("./path");
module.exports = {
    entry: {
        // index: "./src/index.js",
        index: "./src/index.ts",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack",
            template: "./src/index.html",
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            //加载图片
            {
                test: /\.(png|jpg|svg|jpeg|gif|webp)$/i,
                include: [resolveApp("src")],
                type: "asset/resource",
                generator: {
                    filename: "img/[hash][ext][query]", // 局部指定输出位置
                },
            },
            //加载字体图标
            // {
            //     test: /.(woff|woff2|eot|ttf|otf)$/i,
            //     include: [resolveApp("src")],
            //     type: "asset/resource",
            //     generator: {
            //         filename: "iconfont/[hash][ext][query]", // 局部指定输出位置
            //     },
            // },
            //加载less
            {
                test: /\.less$/i,
                include: resolveApp("src"),
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        // options: {
                        //     modules: true,
                        //     importLoaders: 2,
                        // },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        // postcss-preset-env 包含 autoprefixer
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                    "less-loader",
                ],
            },
            //加载vue文件
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            //babel17支持ts的转移，所以可以弃用ts-loader
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            // {
            //     test: /\.(t|j)s$/,
            //     exclude: /node_modules/,
            //     use: [{
            //             loader: "thread-loader",
            //             options: {
            //                 workerParallelJobs: 2,
            //             },
            //         },
            //         {
            //             loader: "babel-loader",
            //             options: {
            //                 cacheDirectory: true,
            //             },
            //         },
            //         // "ts-loader",
            //     ],
            // },
        ],
    },
    //开启缓存
    cache: {
        type: "filesystem",
    },
    //编译优化
    resolve: {
        alias: {
            "@": resolveApp("src"),
        },
        extensions: [".vue", ".ts", ".js"],
        modules: ["node_modules", resolveApp("src")],
    },
};