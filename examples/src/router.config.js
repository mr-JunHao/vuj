import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import hello from '../pages/hello'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: index,
            name: 'index'
        },
        {
            path: '/hello',
            component: hello,
            name: 'hello'
        }
    ]
})