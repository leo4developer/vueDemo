import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router.js';


Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false



new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
