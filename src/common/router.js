import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
    { path: "/", redirect: "/test" },
    { path: "/login", component: () => import("../views/Login.vue") },
    // { path: "/test1", component: () => import("../views/ImportTest.vue") },
    // { path: "/test2", component: () => import("../views/ImportTest.vue") },
    {
        path: "/test", component: () => import("../views/Test.vue"), children: [
            { path: "/test/test1", component: () => import("../views/ImportTest.vue") },
            { path: "/test/test2", component: () => import("../views/ImportTest2.vue") },
        ]
    },
    { path:"/test2", component: () => import("../views/Test2.vue")}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export { router, routes }