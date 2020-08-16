import httpService from "../../utils/axios";
import API from "../../api";
const auth = {
    namespaced: true,
    state: {
        authToken: null,
        authUser: null,
        isLoading: false,
    },
    getters: {
        getAuthUser: (state) => state.authUser,
        getAccessToken: (state) => state.authToken ? state.authToken.access_token : null,
    },
    mutations: {
        SET_AUTH_USER(state, userData) {
            state.authUser = userData;
        },
        SET_AUTH_TOKEN(state, tokens) {
            state.authToken = tokens;
        },
        SET_LOADING(state, status) {
            state.isLoading = status;
        }
    },
    actions: {
        login({ commit }, loginData) {
            commit('SET_GLOBAL_LOADING', true, { root: true });
            commit('SET_LOADING', true);
            return new Promise((resolve, reject) => {
                httpService.post(API.LOGIN, loginData)
                    .then((response) =>{
                        if(response && response.data) {
                            commit('SET_AUTH_TOKEN', response.data);
                            localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
                            localStorage.setItem('REFRESH_TOKEN', response.data.refresh_token);
                        }
                        commit('SET_GLOBAL_LOADING', false, { root: true });
                        commit('SET_LOADING', false);
                        resolve(response);
                    }).catch((error) => {
                    commit('SET_GLOBAL_LOADING', false, { root: true });
                    commit('SET_LOADING', false);
                    reject(error)

                });
            })

        },
        register({commit}, registerData) {
            commit('SET_LOADING', true);
            return new Promise((resolve, reject) => {
                httpService.post(API.REGISTER, registerData).then((response) => {
                    commit('SET_LOADING', false);
                    if(response && response.data) {
                        commit('SET_AUTH_TOKEN', response.data)
                    }
                    resolve(response);
                }).catch((error) => {
                    commit('SET_LOADING', false);
                    reject(error);
                })
            })
        },
        me({commit}) {
            return new Promise((resolve, reject) => {
                httpService.get(API.ME).then((response) => {
                    if(response && response.data) {
                        commit('SET_AUTH_USER', response.data.data)
                    }
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        updateProfile({commit}, profileData) {
            commit('SET_LOADING', true);
            return new Promise((resolve, reject) => {
                httpService.patch(API.ME, profileData).then((response) => {
                    if(response && response.data) {
                        commit('SET_LOADING', false);
                        commit('SET_AUTH_USER', response.data.data)
                    }
                    resolve(response);
                }).catch((error) => {
                    commit('SET_LOADING', false);
                    reject(error);
                })
            })
        }
    }
}

export default auth;
