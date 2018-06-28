// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入全局CSS
import './assets/css/bootstrap.min.css'
import './assets/fonts/glyphicons-halflings-regular.eot'
import './assets/css/global.css'

import echarts from 'echarts'
// import header from './components/header'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
