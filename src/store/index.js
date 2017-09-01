import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import play from './modules/play'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        play
    },
    getters
})