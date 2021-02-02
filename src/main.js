import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
//import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.timeout=10000;
//axios.defaults.baseURL="http://"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

new Vue({
    router,
    render: h => h(App),
    components: {
    App
}
}).$mount('#app')


