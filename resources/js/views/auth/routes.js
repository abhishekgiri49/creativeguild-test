const { guest } = require('../../lib/auth');

export const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('./login'),
        beforeEnter: guest,
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./register'),
        beforeEnter: guest,
    },
    {
        path: '/forget-password',
        name: 'forget-password',
        component: () => import('./forget-password'),
        beforeEnter: guest,
    },
    {
        path: '/reset-password/:email',
        name: 'reset-password',
        component: () => import('./reset-password'),
        beforeEnter: guest,
    },
];