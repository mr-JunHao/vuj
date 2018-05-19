import Vue from 'vue'
import Router from 'vue-router'
// pages

import Container from '../pages/index'

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