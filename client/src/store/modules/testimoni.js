import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        allTestimoni: [],
        testimoni: {}
    }),
    getters: {
        allTestimoni: state => state.allTestimoni,
        testimoni: state => state.testimoni
    },
    mutations: {
        SET_ALL_TESTIMONI(state, data){
            state.allTestimoni = data
        },
        SET_TESTIMONI(state, testimoni){
            state.testimoni = testimoni
        }
    },
    actions: {
        async getAllTestimoni({commit}, endpoint){
            let response = await axios.get(endpoint).then(res => {
                commit('SET_ALL_TESTIMONI', res.data)
                return res.data
            }).catch(err => {
                return err.response
            })

            return response
        },
        async getTestimoni({commit}, id){
            let response = await axios.get(`testimoni/${id}`).then(res => {
                commit('SET_TESTIMONI', res.data)
                return res.data
            }).catch(err => {
                return err.response
            })

            return response
        },
        async storeTestimoni({commit, dispatch}, data){
            commit('SET_FORM_ERRORS', {}, {root: true})
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.post('testimoni', data.form).then(res => {
                data.user.role == 'Admin' ? dispatch('getAllTestimoni', 'allTestimoni') : dispatch('getAllTestimoni', 'userTestimoni')
                return dispatch('successResponse', res)
            }).catch(err => {
                return dispatch('failResponse', err.response)
            })
            return response
        },
        async updateTestimoni({commit, dispatch}, data){
            commit('SET_FORM_ERRORS', {}, {root: true})
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.put(`testimoni/${data.testimoni.id}`, data.testimoni).then(res => {
                data.user.role == 'Admin' ? dispatch('getAllTestimoni', 'allTestimoni') : dispatch('getAllTestimoni', 'userTestimoni')
                return dispatch('successResponse', res)
            }).catch(err => {
                return dispatch('failResponse', err.response)
            })
            return response
        },
        async deleteTestimoni({commit, dispatch}, data){
            commit('SET_BUTTON_LOADING', true, {root: true})
            let response = await axios.delete(`testimoni/${data.id}`).then(res => {
                data.user.role == 'Admin' ? dispatch('getAllTestimoni', 'allTestimoni') : dispatch('getAllTestimoni', 'userTestimoni')
                return dispatch('successResponse', res)
            }).catch(err => {
                return dispatch('failResponse', err.response)
            })
            return response
        },
        successResponse({commit}, response){
            commit('SET_BUTTON_LOADING', false, {root: true})
            window.notyf.success(response.data.message)
            return response
        },
        failResponse({commit}, response){
            commit('SET_BUTTON_LOADING', false, {root: true})
            if(response){
                commit('SET_FORM_ERRORS', response.data.errors, {root: true})
                window.notyf.error(response.data.message)
            }
            return response
        }
    }
}