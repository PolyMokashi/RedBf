import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueGtm from "@gtm-support/vue2-gtm";

Vue.config.productionTip = false
Vue.use(VueGtm, {
  id: "GTM-P9CNT9G6",
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
