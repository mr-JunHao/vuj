import Vue from 'vue'
import App from './App'
import vj from 'src/index'
import router from './router.config'
import 'packages/styles/index.css'
Vue.use(vj);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
