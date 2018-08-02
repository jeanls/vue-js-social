// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$urlAPI = "http://127.0.0.1:8000/api/";
Vue.prototype.$token = function () {
    return sessionStorage.getItem('token')
};

var store = {
    state: {
        nome: "Jean"
    },
    getters: {
        getNome: state => {
            return state.nome;
        }
    },
    mutations: {
        setNome(state, n){
            state.nome = n;
        }
    }
};

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: new Vuex.Store(store),
    components: {App},
    template: '<App/>'
});
