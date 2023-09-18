import { createRouter, createWebHistory } from "vue-router";

// importo componenti

import Login from './components/pages/registration/Login.vue';

import SignIn from './components/pages/registration/SignIn.vue';

import Homepage from './components/pages/Homepage.vue';

import Edit from './components/pages/Edit.vue';

import Search from './components/pages/Search.vue';


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
        {
            path: '/edit-profile',
            name: 'Edit',
            component: Edit,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
        }
    ]

})

export{router};