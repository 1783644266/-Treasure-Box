import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/css/reset.css'
import 'assets/css/base.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//利用事件总线，监听图片onload,刷新scroll
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
