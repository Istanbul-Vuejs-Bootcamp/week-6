import httpService from "../../utils/axios";
import API from "../../api";

const auth = {
    namespaced: true,
    state: {
        authUser: null,
    },
    getters: {
        getAuthUser: (state) => state.authUser,
    },
    mutations: {
        SET_AUTH_USER(state, userData) {
            state.authUser = userData;
        }
    },
    actions: {
        login({ commit }, loginData) {
            httpService.post(API.LOGIN, loginData)
                .then((response) =>{
                    commit('SET_AUTH_USER', response.data)
            })
        }
    }
}

export default auth;
