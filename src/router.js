import { createRouter, createWebHistory } from "vue-router";

// importo componenti

import Login from './components/pages/registration/Login.vue';

import SignIn from './components/pages/registration/SignIn.vue';

import Homepage from './components/pages/Homepage.vue'


const router= createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage,
        },

        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/registration',
            name: 'Registration',
            component: SignIn,
        },
    ]

})

export{router};