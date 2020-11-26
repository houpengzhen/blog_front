import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'
import mavonEditor from 'mavon-editor'



import "element-ui/lib/theme-chalk/index.css"
import "mavon-editor/dist/css/index.css"

import "./axios.js"

// Vue.use(xx) --> 全局使用 xx 插件
// 全局使用element-ui插件
Vue.use(Element);
// 全局使用 axios
// Vue.use(axios)
Vue.prototype.$axios = axios;
// markdown 
Vue.use(mavonEditor);

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
