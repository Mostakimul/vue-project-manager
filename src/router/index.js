import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddNewProject from '../views/AddNewProject.vue';
import EditProject from '@/views/EditProject.vue';

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
  {
    path: '/edit/:id',
    name: 'EditProject',
    component: EditProject,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
