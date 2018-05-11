import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        SET_TOKEN: function (state, token) {
            state.token = token
        }
    },
    actions: {
        nuxtServerInit({ commit }, { req, res }) {
            const token = Cookie.get('TOKEN');
            if(token){
                commit('SET_TOKEN', token)
            }
        }
    }

})
export default store