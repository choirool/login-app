import Vue from "nativescript-vue";
import RadDataForm from 'nativescript-ui-dataform/vue';
import Home from "./components/Home";
import store from './store/index'

Vue.config.silent = (TNS_ENV === 'production');

Vue.use(RadDataForm);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

new Vue({
    render: h => h('frame', [h(Home)]),
    store
}).$start();
