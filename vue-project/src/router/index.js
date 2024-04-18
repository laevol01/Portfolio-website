import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'
import Illustrationer from '@/components/galleries/Illustrationer.vue'
import Videoer from '@/components/galleries/Videoer.vue'
import Billeder from '@/components/galleries/Billeder.vue'
import Web from '@/components/galleries/Web.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
       path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/illustrationer',
      name: 'illustrationer',
      component: Illustrationer
    },
    {
      path: '/videoer',
      name: 'videoer',
      component: Videoer
    },
    {
      path: '/billeder',
      name: 'billeder',
      component: Billeder
    },
    {
      path: '/billeder',
      name: 'billeder',
      component: Billeder
    },
    {
      path: '/web',
      name: 'web',
      component: Web
    },
  ]
})

export default router
