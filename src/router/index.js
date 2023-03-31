import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../pages/Login.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../pages/MoviesHome.vue')
        },        
        {
            path: '/movie/:id',
            name: 'Movie',
            component: () => import('../pages/Movie.vue'),
            props: true
        },
        {
            path: "/:catchAll(.*)",
            name: "Not Found",
            component: () => import('../pages/404.vue'),
          },
    ]
});

router.beforeEach((to, from) => {

})

export default router;