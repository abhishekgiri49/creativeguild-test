import { authRoutes } from '../views/auth/routes';
import { dashboardRoutes } from '../views/dashboard/routes';
// Vue.use(Router)
import { createWebHistory, createRouter } from "vue-router";
import { getToken, setToken } from "../lib/storage";


let routes = [

];

let errorRoutes = [

];

routes = [...dashboardRoutes, ...authRoutes, ...routes, ...errorRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;