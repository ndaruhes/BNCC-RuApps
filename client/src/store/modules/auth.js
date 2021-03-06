import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state: () => ({
        token: null,
        user: []
    }),
    getters: {
        authenticated: state => state.token && state.user,
        user: state => state.user
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions: {
        async register({commit}, credentials){
            commit('SET_FORM_ERRORS', {}, {root: true})
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.post('register', credentials).then(res => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                window.notyf.success(res.data.message)
                router.push('/login')
                return res
            }).catch(err => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                if(err.response){
                    commit('SET_FORM_ERRORS', err.response.data.errors, {root: true})
                }
                window.notyf.error(err.response.data.message)
                return err.response
            })
            return response
        },
        async login({commit, dispatch}, credentials) {
            commit('SET_FORM_ERRORS', {}, {root: true})
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.post('login', credentials).then(res => {
                commit('SET_BUTTON_LOADING', false, {root: true})  
                window.notyf.success(res.data.message)
                dispatch('attempt', res.data.token)
                router.push('/')
                return res
            }).catch(err => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                if(err.response){
                    commit('SET_FORM_ERRORS', err.response.data.errors, {root: true})
                }
                window.notyf.error(err.response.data.message)
                return err.response
            })
            return response
        },
        async attempt({commit, state}, token){
            if(token){
                commit('SET_TOKEN', token)
            }
            if(!state.token){
                return
            }
            
            await axios.get('profile').then(res => {
                commit('SET_USER', res.data.user)
            }).catch(() => {
                commit('SET_USER', [])
                commit('SET_TOKEN', null)
            })
        },
        async logout({commit}){
            commit('SET_TOKEN', null)
            commit('SET_USER', [])
            window.notyf.success("Berhasil Logout")
            router.push('/')
        }
    }
}