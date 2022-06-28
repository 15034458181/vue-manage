import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index'
// 引入使用axios
import http from 'axios'
// 引入mock
import "../api/mock.js"
// 引入vuex
import store from '../store'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 把axios绑定在vue的原型对象上，这样组件都能使用这个方法
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
