import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../layout/AppLayout.vue"),
            name: "app",
            children: [
                {
                    path: "/home",
                    component: () => import("../views/Home.vue"),
                    name: "home",
                }
            ]
        }
    ]
});

export default router;