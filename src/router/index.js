import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'
import page4 from '../components/page4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1
    }, {
      path: '/page2',
      name: 'page2',
      component: page2
    }, {
      path: '/page3',
      name: 'page3',
      component: page3
    }, {
      path: '/page4',
      name: 'page4',
      component: page4
    }, {
      path: '*',
      redirect: '/page1'
    }
  ]
})
