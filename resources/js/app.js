import { createApp } from 'vue'
import serviceContainer from "./service-container";
import router from './router';
import store from './store'
import { h } from 'vue'
import App from './App.vue'

const app = createApp({
    provide: serviceContainer,
    render: () => h(App)
})
app.use(router)
app.use(store)
app.use('compiler');

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

app.use(VueSweetalert2);
import Vuelidate from 'vuelidate'
app.use(Vuelidate)
import Tippy from 'vue-tippy';
window._ = require('lodash');
app.use(Tippy, {
    arrow: true,
    theme: 'translucent'
});
import { Form, HasError, AlertError } from 'vform'

window.form = Form;
app.component(HasError.name, HasError);
app.component(AlertError.name, HasError);

// Make BootstrapVue available throughout your project
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.mount('#root')
require('./bootstrap');
