import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index.vue'
import echarts from '../views/echarts.vue'
import action from '../views/action.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/action',
      name: 'action',
      component: action
    }
  ]
})
