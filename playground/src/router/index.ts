import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import FormsPage from '../pages/FormsPage.vue';
import VisualsPage from '../pages/VisualsPage.vue';
import OthersPage from '../pages/OthersPage.vue';
import StoragePage from '../pages/StoragePage.vue';
import ApiPage from '../pages/ApiPage.vue';

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
  },
  {
    path: '/storage',
    name: 'Storage',
    component: StoragePage
  },
  {
    path: '/api',
    name: 'Api',
    component: ApiPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
