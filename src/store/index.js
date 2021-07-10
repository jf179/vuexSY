import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from './modules/catagtory'
import list from './modules/list'
import getters from './getters.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    getters,
    modules: {
        catagtory,
        list,
    }
})

export default store