import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'bootstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuelidate from 'vuelidate';
import router from './router';
Vue.config.productionTip = false;
Vue.use(Vuelidate);
library.add(fas);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
