import Vue from 'vue'
import App from './App'
import vj from '../../src/index'
import router from './router.config'
Vue.use(vj);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
