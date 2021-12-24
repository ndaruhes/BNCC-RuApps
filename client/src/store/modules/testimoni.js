import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state: () => ({
        allTestimoni: [],
    }),
    getters: {
        allTestimoni(state){
            return state.allTestimoni
        }
    },
    mutations: {
        SET_ALL_TESTIMONI(state, data){
            state.allTestimoni = data
        }
    },
    actions: {
        async getAllTestimoni({commit}){
            let response = await axios.get('testimoni').then(res => {
                commit('SET_ALL_TESTIMONI', res.data)
                return res.data
            }).catch(err => {
                return err.response
            })

            return response
        },
        async storeTestimoni({commit, dispatch}, data){
            console.log(data)
            commit('SET_FORM_ERRORS', {}, {root: true})
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.post('testimoni', data).then(res => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                window.notyf.success(res.data.message)
                dispatch('getAllTestimoni')
                return response
            }).catch(err => {
                if(err.response.data.errors){
                    commit('SET_FORM_ERRORS', err.response.data.errors, {root: true})
                }
                commit('SET_BUTTON_LOADING', false, {root: true})
                window.notyf.error(err.response.data.message)
                return err.response
            })
            return data
        }
    }
}