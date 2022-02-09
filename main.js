import App from './App'
const message = require('./config/message.js')
const http = require('./request/axios.js')
const store = require('./config/store.js')
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$message = message
Vue.prototype.$http = http
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif