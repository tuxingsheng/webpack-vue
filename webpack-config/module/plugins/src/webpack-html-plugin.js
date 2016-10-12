'use strict';

const _ = require('lodash');

let webpackViews = [];
let base = require('../../../base/webpack-base.js');
let views = require('../../../base/webpack-base.json').views;
const HtmlWebpackPlugin = require('html-webpack-plugin');

_.forEach(views, function (view) {
    webpackViews.push(
        new HtmlWebpackPlugin({
            hash: true,
            inject: 'body',
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: false
            // },
            chunks: view.chunks,
            // 目标文件
            filename: view.filename,
            // 模板文件
            template: base.CLIENT(view.template)
        })
    )
});

module.exports = webpackViews;
