import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import FormsPage from '../pages/FormsPage.vue';
import VisualsPage from '../pages/VisualsPage.vue';
import OthersPage from '../pages/OthersPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/forms',
    name: 'Forms',
    component: FormsPage
  },
  {
    path: '/visuals',
    name: 'Visuals',
    component: VisualsPage
  },
  {
    path: '/others',
    name: 'Others',
    component: OthersPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
