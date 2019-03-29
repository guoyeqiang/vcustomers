import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
// import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

// Vue.use(vueResource)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')