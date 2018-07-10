import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index.vue'
import echarts from '../views/echarts.vue'

Vue.use(Router)

export default new Router({
  routes: [{
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
      path: '/slotScope',
      name: '作用域插槽',
      component: () =>
        import ('../views/slotScope.vue')
    },
    {
      path: '/promise',
      name: 'promise bluebird demo',
      component: () =>
        import ('../views/promise_bluebild.vue')
    }
  ]
})
