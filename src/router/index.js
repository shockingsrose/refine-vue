import Vue from 'vue';
import Router from 'vue-router';

import index from '../views/index.vue';
import echarts from '../views/echarts.vue';

Vue.use(Router);

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
      path: '/hCharts',
      name: 'hCharts',
      component: () => import('../views/highCharts.vue')
    },
    {
      path: '/slotScope',
      name: '作用域插槽',
      component: () => import('../views/slotScope.vue')
    },
    {
      path: '/promise',
      name: 'promise bluebird demo',
      component: () => import('../views/promise_bluebild.vue')
    },
    {
      path: '/vfor',
      name: 'v-for 复用测试',
      component: () => import('../views/vFor.vue')
    },
    {
      path: '/propFunction',
      name: 'function-type-prop代替emit',
      component: () => import('../views/propFunction/parent.vue')
    },
    {
      path: '/cModal',
      name: 'cModal',
      component: () => import('../views/cModal/index.vue')
    },
    {
      path: '/clickEvent',
      name: '事件修饰符',
      component: () => import('../views/clickEvent/index.vue')
    },
    {
      path: '/transition',
      name: 'vue 动画 transition',
      component: () => import('../views/transition/index.vue')
    },
    {
      path: '/carousel',
      name: '轮播图',
      component: () => import('../views/Carousel.vue')
    },
    {
      path: '/vForWithVIf',
      name: 'v-if with v-for',
      component: () => import('../views/v-if with v-for.vue')
    },
    {
      path: '/audio',
      name: '播放声音',
      component: () => import('../views/audio.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox多级联调',
      component: () => import('../views/checkbox.vue')
    }
  ]
});
