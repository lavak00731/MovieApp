import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/MoviesHome.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../pages/Login.vue')
        },
        {
            path: '/movie/:id',
            name: 'Movie',
            component: () => import('../pages/Movie.vue'),
            props: true
        }
    ]
});

export default router;