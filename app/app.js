import Vue from "nativescript-vue";
import RadDataForm from 'nativescript-ui-dataform/vue';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import store from './store/index'
import { getToken } from "./utils/auth";

Vue.config.silent = (TNS_ENV === 'production');

Vue.use(RadDataForm);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

new Vue({
    render: h => h('frame', [h(getToken() ? Dashboard : Home)]),
    store
}).$start();
