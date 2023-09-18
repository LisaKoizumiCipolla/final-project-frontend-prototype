import { createRouter, createWebHistory } from "vue-router";

// importo componenti

import Login from './components/pages/registration/Login.vue';

import SignIn from './components/pages/registration/SignIn.vue';

import Homepage from './components/pages/Homepage.vue';

import Edit from './components/pages/Edit.vue';

import Show from './components/pages/Show.vue';


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
            path: '/edit_profile',
            name: 'Edit',
            component: Edit,
        },
        {
            path: '/show_hunter',
            name: 'Show',
            component: Show,
        }
    ]

})

export{router};