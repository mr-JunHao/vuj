import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import hello from '../pages/hello'
//docs
import helloMD from '../markdown/hello.md'

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
        },
        {
            path: '/docs/hello',
            component: helloMD,
            name: ''
        }
    ]
})