import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./module/home/index";
import about from "./module/about/index";
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    
    {
        path: "/about",
        component: about
    },
   
    // 重定向
    {
      path: '/', 
      redirect: '/home' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;