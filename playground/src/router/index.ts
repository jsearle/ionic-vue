import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import FormsPage from '../pages/FormsPage.vue';
import VisualsPage from '../pages/VisualsPage.vue';
import OthersPage from '../pages/OthersPage.vue';
import StoragePage from '../pages/StoragePage.vue';
import ApiPage from '../pages/ApiPage.vue';
import DatabasePage from '../pages/DatabasePage.vue';
import CapacitorPage from '../pages/CapacitorPage.vue';
import CameraPage from '../pages/CameraPage.vue';
import GeolocationPage from '../pages/GeolocationPage.vue';
import MotionPage from '../pages/MotionPage.vue';
import MapsPage from '../pages/MapsPage.vue';
import NotificationsPage from '../pages/NotificationsPage.vue';

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
  },
  {
    path: '/database',
    name: 'Database',
    component: DatabasePage
  },
  {
    path: '/capacitor',
    name: 'Capacitor',
    component: CapacitorPage
  },
  {
    path: '/camera',
    name: 'Camera',
    component: CameraPage
  },
  {
    path: '/geo',
    name: 'Geolocation',
    component: GeolocationPage
  },
  {
    path: '/motion',
    name: 'MotionPage',
    component: MotionPage
  },
  {
    path: '/maps',
    name: 'MapsPage',
    component: MapsPage
  },
  {
    path: '/notifications',
    name: 'NotificationsPage',
    component: NotificationsPage
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
