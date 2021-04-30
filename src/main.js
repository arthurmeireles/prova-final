import Vue from 'vue';
import App from './App.vue';
import router from './router';

// -------------------------------------------------------
import Navbar from '../src/components/Navbar';
Vue.component('Navbar', Navbar);


// -------------------------------------------------------
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faWhatsapp, faInstagram);

import {
  faFire,
  faCloudUploadAlt,
  faPlus,
  faBookmark,
  faUser,
  faSmileWink,
  faStoreAlt,
  faSortAmountDown,
  faEllipsisV,
  faCog,
  faTrash,
  faUserPlus,
  faSearch,
  faHome,
  faCompass,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
library.add(
  faFire,
  faCloudUploadAlt,
  faPlus,
  faBookmark,
  faUser,
  faSmileWink,
  faStoreAlt,
  faSortAmountDown,
  faEllipsisV,
  faCog,
  faTrash,
  faUserPlus,
  faSearch,
  faHome,
  faCompass,
  faSpinner
);
// -------------------------------------------------------
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
// CONFIGURO O BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// ------------------------------

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');


Vue.http.options.crossOrigin = true
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
