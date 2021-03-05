import React from "react";
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import NotFound from '../Pages/NotFound'

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        isPrivate: true
    },
    {
        path: '/login',
        component: Login,
        isPrivate: false
    },
    {
        path: '/*',
        component: NotFound,
        isPrivate: true
    }
]

export default routes