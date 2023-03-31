import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('../pages/Login.vue')
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/MoviesHome.vue')
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: () => import('../pages/Favorites.vue')
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
    const isAuthenticated = localStorage.getItem('isLogged');
    if (isAuthenticated !== 'true' && to.name !== 'Login') {
        return { name: 'Login' }
    } 


})

export default router;