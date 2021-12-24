import {createStore} from 'vuex'
import auth from './modules/auth'
import testimoni from './modules/testimoni'

const stores = createStore({
    state: {
        btnLoading: false,
        formErrors: []
    },
    mutations: {
        SET_BUTTON_LOADING(state, status){
            state.btnLoading = status
        },
        SET_FORM_ERRORS(state, errors){
            state.formErrors = errors
        },
    },
    actions: {},
    getters: {
        btnLoading(state){
            return state.btnLoading
        },
        formErrors(state){
            return state.formErrors
        }
    },
    modules: {auth, testimoni}
})

export default stores