import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

import { Button } from 'mint-ui';

import 'mint-ui/lib/style.css';
//不引入没效果
import 'assets/css/reset.css'
import 'assets/css/base.css'




Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//利用事件总线，监听图片onload,刷新scroll
Vue.component(Button.name, Button);
Vue.prototype.$moment = moment;

Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD') {
  return moment(value*1000).format(formatStr)
  // return format(value, formatStr)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
