import Vue from 'vue';
import App from './App.vue';
require('@/assets/main.scss');
Vue.config.productionTip = false;

/** Vuelidate ! */
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
