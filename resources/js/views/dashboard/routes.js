const { guest } = require("../../lib/auth");
const { guard } = require("../../lib/auth");
export const dashboardRoutes = [
    {
        path: "/user/dashboard",
        name: "dashboard",
        component: () => import("./dashboard"),
        beforeEnter: guard,
        meta: {
            requiresAuth: true,
            layout: "dashboard",
            role: "user"
        }
    },
    
];
