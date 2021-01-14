import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from "./App";
import musichall from "./components/musichall";
import mymusic from "./components/mymusic";
import login from "./components/login";
import register from "./components/register";
import SingList from "../src/components/common/SingList/SingList";
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'App',
        component: App
    }, {
        path: '/musichall',
        name: 'musichall',
        component: musichall
    }, {
        path: '/mymusic',
        name: 'mymusic',
        component: mymusic
    }, {
        path: "/login",
        name: "login",
        component: login
    }, {
        path: "/register",
        name: "register",
        component: register
    }, {
        path: "/SingList/:id",
        name: "SingList",
        component: SingList
    }]
})