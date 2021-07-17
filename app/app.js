import Vue from "nativescript-vue";
import RadDataForm from 'nativescript-ui-dataform/vue';
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import Home from "./pages/Home";
import App from "./components/App";
import DrawerContent from "./components/DrawerContent";
import Dashboard from "./pages/Dashboard";
import store from './store/index'
import { getToken } from "./utils/auth";
import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
import { install } from "@nativescript-community/ui-material-bottomsheet";
install();


Vue.config.silent = (TNS_ENV === 'production');

Vue.use(BottomSheetPlugin);
Vue.use(RadDataForm);
Vue.use(RadSideDrawer);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

new Vue({
  // render: h => h('frame', [h(getToken() ? Dashboard : Home)]),
  render: h => h(
    App,
    [
      h(DrawerContent, { slot: 'drawerContent' }),
      h(getToken() ? Dashboard : Home, { slot: 'mainContent' })
    ]
  ),
  store
}).$start();
