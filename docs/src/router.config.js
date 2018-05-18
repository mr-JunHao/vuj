import Vue from 'vue'
import Router from 'vue-router'
// pages

// import index from '../pages/index'

import Container from '../pages/container'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: Container,
            name: 'container'  
        }
    ]
})