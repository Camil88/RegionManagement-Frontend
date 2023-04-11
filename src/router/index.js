import Vue from 'vue'
import VueRouter from 'vue-router'
import RevGP from '../views/RevGP.vue'
import Stats from '../views/Stats.vue'
import Commissions from '../views/Commissions.vue'
import Shipments from '../views/Shipments.vue'
import Customers from '../views/Customers.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/revgp',
    name: 'RevGp',
    component: RevGP
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/commissions',
    name: 'Commissions',
    component: Commissions
  },
  {
    path: '/shipments',
    name: 'Shipments',
    component: Shipments
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },

  {
    path: '/about',
    name: 'about',
  }
]

const router = new VueRouter({
  routes
})

export default router
