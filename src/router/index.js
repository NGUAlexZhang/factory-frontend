import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/views/layout";
import customer from "@/views/customer";
import commodity from "@/views/commodity";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: layout,
        children: [
            {path: 'customer', component: customer},
            {path: 'commodity', component: commodity}
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
