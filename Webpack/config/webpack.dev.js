const path = require("path"); // node.js 核心模块，专门用来处理路径问题

// 引入插件
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径
    // 输出
    output: {
        // 文件的输出路径
        // __dirname 代表当前文件的文件夹目录
        // path: path.resolve(__dirname, '../dist'),  // 绝对路径 ，所有打包文件的输出目录
        // 开发模式没有输出
        path: undefined,
        // 入口文件打包文件的路径+文件名
        filename: "static/js/main.js",
        // 自动清空上次打包的内容
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            // loader的配置 
            {
                test: /\.css$/, // 只检测.css结尾的文件
                use: [// 执行顺序，从左到右 从上到下
                    // "style-loader", // 将js中css通过创建style标签添加到html文件中生效
                    "css-loader", // 将css资源编译成common.js的模块到js中
                    MiniCssExtractPlugin.loader, // 提取css成单独文件
                ],
                
            },
            {
                test: /\.less$/,
                use: [
                    // compiles Less to CSS
                    // 'style-loader',
                    MiniCssExtractPlugin.loader, // 提取css成单独文件
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    // 'style-loader',
                    MiniCssExtractPlugin.loader, // 提取css成单独文件
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 小于10kb的图片转base64
                        maxSize: 10 * 1024 // 10kb
                    }
                },
                generator: {
                    // 输出打包图片的位置和名字
                    filename: 'static/images/[hash:10][ext][query]'
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    // 输出打包字体的位置和名字
                    filename: 'static/media/[hash:10][ext][query]'
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, // 排除node_modules中的js文件（这些文件不处理）
                loader: 'babel-loader',
                // 可以拿到外面写
                // options: {
                //     presets: ['@babel/preset-env']
                // }
            },

        ],
    },
    // 插件
    plugins: [
        // plugin的配置
        new ESLintPlugin({
            // 检测哪些文件
            context: path.resolve(__dirname, '../src'),
        }),
        new HtmlWebpackPlugin({
            // 模板 ：以public/index.html文件创建新的html文件
            // 新的文件特点 ：1.结构和原来一样 2. 自动引入打包输出的资源
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin(),
    ],
    // 开发服务器:不会输出资源，在内存中编译打包
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    // 模式 development:开发模式  production:生产模式
    mode: 'development',
}