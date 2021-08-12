import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddNewProject from '../views/AddNewProject.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddNewProject',
    component: AddNewProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
