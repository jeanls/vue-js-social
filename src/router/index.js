import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/pages/Login'
import Cadastro from '@/components/pages/Cadastro'
import Perfil from '@/components/pages/Perfil'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: Cadastro
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: Perfil
        }
    ]
})
