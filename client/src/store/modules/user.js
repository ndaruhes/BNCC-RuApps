export default {
    state: () => ({
        name: 'Ndaru'
    }),
    getters: {},
    mutations: {
        SET_NAME(state, name) {
            state.name = name
        }
    },
    actions: {
        saveName({commit}, data){
            commit('SET_NAME', data)
        }
    }
}