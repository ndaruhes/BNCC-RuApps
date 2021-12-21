import {createStore} from 'vuex'
import user from './modules/user'

const stores = createStore({
    modules: {user}
})

export default stores