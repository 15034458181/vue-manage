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

// 导航守卫!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!,完成了初始页面被登录页面守卫
router.beforeEach((to,form,next) =>{
  store.commit("getToken")
  // 把当前的token接下来
  const token = store.state.user.token
  // 判断当前拿到的token有没有，并且他想要跳转不是登录页面
  if(!token && to.name !== 'login'){
    // 拦截跳转，让用户待在登录页
    next({name:'login'})
  }else if(token && to.name === "login"){
    next({name:'home'})
  }
  else{
    // 如果成功登录，跳转下一步
    next()
  }
})




new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit("addMenu",router)
  }
}).$mount('#app')
