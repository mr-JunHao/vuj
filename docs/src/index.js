import Vue from 'vue'
import App from './App'
import vuj from 'src/index'
import router from './router.config'
//所有组件css
import 'packages/styles/src/index.css'
//markdown样式
import 'github-markdown-css'
//代码高亮
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

