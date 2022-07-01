const Pages = require('./pages.js');

console.log(Pages);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        index: './src/main.js',
    },
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [].concat(
        Pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    hash: true,
                    inject: true,
                    title: 'Webpack Example App',
                    header: 'Webpack Example Title',
                    metaDesc: 'Webpack Example Description',
                    template: `./src/${page.filename}`,
                    filename: `${page.filename}`,
                    inject: 'body',
                })
        )
    ).concat(
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ),
    devServer: {
        hot: false,
        static: {
            directory: path.join(__dirname, 'dist')
        },
    }
};