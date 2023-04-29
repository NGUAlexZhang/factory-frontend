import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/views/layout";
import customer from "@/views/customer";
import commodity from "@/views/commodity";
import staff from "@/views/staff/index.vue";
import home from "@/views/Home/index.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: layout,
        children: [
            {path: '', component: home},
            {path: 'customer', component: customer},
            {path: 'commodity', component: commodity},
            {path: 'staff', component: staff}
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
