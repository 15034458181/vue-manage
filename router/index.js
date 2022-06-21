import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/MyHome.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'MyHome',
        // 引入页面
        component:()=> import('../views/MyHome.vue')
    },
    {
        path:"/user",
        name:"MyUser",
        component:()=> import('../views/MyUser.vue')
    }
    
]

const router = new VueRouter({
    mode:'history',
//    使用数组形式传入路由的配置项
    routes:routes
})

export default router
