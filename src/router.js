import vue from 'vue';
import vueRouter from 'vue-router';

vue.use(vueRouter);

const routes = [{
        path: "/",
        name: "customers",
        component: () =>
            import ('./view/Customers.vue')
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ('./view/About.vue')
    },
    {
        path: "/add",
        name: "add",
        component: () =>
            import ('./view/Add.vue')
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: () =>
            import ('./view/Edit.vue')
    },
    {
        path: "/customerdetails/:id",
        name: "customerDetails",
        component: () =>
            import ('./view/CustomerDetails.vue')
    },
    {
        path: "/vuex",
        name: "vueX",
        component: () =>
            import ('./view/vuexTesst.vue')
    }, {
        path: "*",
        redirect: "/"
    }
];

const router = new vueRouter({
    mode: "history",
    routes
})

export default router;