/**
 * webpack.config
 *
 * Created by Igor.N on 11.03.2024 23:36
 *
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ development }) => ({
    entry: development ?'./src/indexDev.ts':'./src/index.ts',
    devtool: development ? 'inline-source-map' : false,
    optimization: {
        minimize: development ? false :true ,
    },
    mode: development ? 'development' : 'production',
    output: {
        filename: 'dxf-viewer.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'dxfViewer',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self === \'undefined\' ? this : self',
        clean: true,
    },
    resolve: {
        extensions: ['.ts','.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                // test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
                // use: ['babel-loader'],
            },
            ...development?[{
                test: /Roboto-LightItalic.ttf$/i,
                type: 'asset/inline',
            }]:[]
        ],
    },
    ... development ? {
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
        ],
        stats: 'errors-only',
        devServer: {
            static: {
                directory: path.join(__dirname,   'dist'), // Каталог для статики
            },
            open: true, // Автоматически открывать браузер
        }
    }:{}
});