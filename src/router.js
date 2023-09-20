import { createRouter, createWebHistory } from "vue-router";

// importo componenti

import Login from './components/pages/registration/Login.vue';

import SignIn from './components/pages/registration/SignIn.vue';

import Homepage from './components/pages/Homepage.vue';

//import Edit from './components/pages/Edit.vue';

import Show from './components/pages/Show.vue';

import About from './components/pages/About.vue';


//import auth from "@/middleware/auth";

import Dashboard from './components/pages/Dashboard.vue';

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
       
       /** {
            path: '/edit_profile',
            path: '/edit_profile',
            name: 'Edit',
            component: Edit,
        }, */
        {
            path: '/show_hunter/:id',
            name: 'Show',
            component: Show,
        },
       /**  {
            path: "/dashboard",
            name: "dashboard",
            meta: { middleware: [auth] },
            component: () =>
            import( "../views/Dashboard"),
          } */
        

        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ]

})

export{router};