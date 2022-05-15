import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const now = new Date();

const store = new Vuex.Store({
    state: {
        mate: JSON.parse(localStorage.getItem("mate")),
        userInfo: {
            id: '1',
            img: 'http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg',
            nickname: "somebody"
        }
    },
    mutations: {
        setMate(state, mate) {
            state.mate = mate
        }
    },
    actions: {
        setMate({ commit }, mate) {
            commit('setMate', mate)
        },
    }
})

export default store;