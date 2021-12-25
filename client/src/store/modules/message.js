import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        messages: [],
        message: {}
    }),
    getters: {
        messages: state => state.messages,
        message: state => state.message
    },
    mutations: {
        SET_MESSAGES(state, messages) {
            state.messages = messages
        },
        SET_MESSAGE(state, message) {
            state.message = message
        }
    },
    actions: {
        async getMessages({commit}){
            let response = await axios.get('contact').then(res => {
                commit('SET_MESSAGES', res.data)
                return res.data
            }).catch(err => {
                return err.response
            })
            return response
        },
        async getMessage({commit}, id){
            let response = await axios.get(`contact/${id}`).then(res => {
                commit('SET_MESSAGE', res.data)
                return res.data
            }).catch(err => {
                return err.response
            })
            return response
        },
        async storeMessage({commit}, data){
            commit('SET_FORM_ERRORS', {}, {root: true})
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.post('contact', data).then(res => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                window.notyf.success(res.data.message)
                return res
            }).catch(err => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                if(err.response){
                    commit('SET_FORM_ERRORS', err.response.data.errors, {root: true})
                    window.notyf.error(err.response.data.message)
                }
                return err.response
            })
            return response
        },
        async deleteMessage({commit, dispatch}, id){
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.delete(`contact/${id}`).then(res => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                dispatch('getMessages')
                window.notyf.success(res.data.message)
                return res.data
            }).catch(err => {
                commit('SET_BUTTON_LOADING', false, {root: true})
                if(err.response){
                    window.notyf.error(err.response.data.message)
                }
                return err.response
            })
            return response
        },
    }
}