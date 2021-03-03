import React from "react";
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import NotFound from '../Pages/NotFound'

const routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/*',
        component: NotFound
    },
    {
        path: '/',
        component: Login
    },
]

export default routes