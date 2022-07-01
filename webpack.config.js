const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack Example App',
            header: 'Webpack Example Title',
            metaDesc: 'Webpack Example Description',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    output: {
        clean: true
    },
    devServer: {
        hot: false,
        static: {
            directory: path.join(__dirname, 'dist')
        },
    }
};