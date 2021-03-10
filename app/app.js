import Vue from "nativescript-vue";
import RadDataForm from 'nativescript-ui-dataform/vue';
import Home from "./components/Home";

Vue.config.silent = (TNS_ENV === 'production');

Vue.use(RadDataForm);

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
