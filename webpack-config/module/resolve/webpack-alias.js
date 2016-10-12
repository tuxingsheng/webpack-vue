'use strict';

let base = require('../../base/webpack-base.js');

module.exports = {
    'vue': base.CLIENT('bower/javascript/vue/vue-1.0.28.common.js'),
    'jquery': base.CLIENT('bower/javascript/jquery/jquery-2.0.3.js')
};
