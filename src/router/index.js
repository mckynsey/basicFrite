import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Subscription from '@/views/Subscription.vue';
import Contact from '@/views/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/subscription', name: 'Subscription', component: Subscription },
    { path: '/contact', name: 'Contact', component: Contact },
  ],
});

export default router;