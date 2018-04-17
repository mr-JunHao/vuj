import Vue from 'vue'
import Router from 'vue-router'
// pages

// import index from '../pages/index'

import Container from '../pages/container'
//docs
import helloMD from '../markdown/hello.md'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/docs/hello',
            component: helloMD,
            name: ''
        },
        {
            path: '/container',
            component: Container,
            name: ''  
        }
    ]
})