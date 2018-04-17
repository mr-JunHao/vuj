import Vue from 'vue'
import App from './App'
import vuj from 'src/index'
import router from './router.config'
import 'packages/styles/src/index.css'
import 'github-markdown-css'
import 'highlight.js/styles/atom-one-light.css'
Vue.use(vuj);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    // render: h => h(App)
    template: '<App/>',
    components: {
        App
    }
})

