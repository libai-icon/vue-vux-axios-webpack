import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)


export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['../views/home'], resolve)
        },
        {
            path: '/showCli',
            name: 'showCli',
            component: resolve => require(['../views/showCli'], resolve)  ,
            meta: {
                scrollToTop: true
            }
        },
        {
            path: '/map',
            name: 'map',
            component: resolve => require(['../views/map'], resolve)  ,
            meta: {
                scrollToTop: true
            }
        },
        {
            path: '*',
            name: 'page404',
            component: resolve => require(['../views/page404.vue'], resolve)
        }

    ]
})
