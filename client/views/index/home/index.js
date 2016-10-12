'use strict';

require('./index.less');

import Vue from 'vue';
import AppContent from './components/AppContent.vue';

//console.log(Vue);
//console.log($);

Vue.config.silent = true;

let app = new Vue({
    el: '#app',
    components: {
        AppContent
    },
    ready() {

    },
    data() {
        return {}
    },
    methods: {}
});

