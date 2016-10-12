'use strict';

/*
 * 自定义插件
 * */
function HtmlBeforeProcessing(options) {
    // do something...
}

HtmlBeforeProcessing.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
            //console.log(htmlPluginData);
            callback(null, htmlPluginData);
        });
    });
};

module.exports = new HtmlBeforeProcessing();
