window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {
    console.log(e)
}

window.axios = require('axios');
//
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;
window.axios.defaults.baseURL = document.head.querySelector('meta[name="api-base-url"]').content;

// window._translations = document.head.querySelector('meta[name="app-translations"]').content;


window.moment = require('moment');




