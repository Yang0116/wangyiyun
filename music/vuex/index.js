import Vue from 'vue';
import httpRequest from "../src/request/index"
import Vuex, { Store } from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        activeFlage: 1,
        copyrightShow: true,
        playShow: true,
        islogin: false,
        userInfoList: {}
    },
    getters: {
        getCopyrightShow(state) {
            return state.copyrightShow;
        },
        getPlayShow(state) {
            return state.playShow;
        },
        getActiveFlage(state) {
            return state.activeFlage;
        },
        getIslogin(state) {
            return state.islogin;
        },
        getUserInfoList(state) {
            return state.userInfoList;
        },
    },
    mutations: {
        setCopyrightShow(state, data) {
            return state.copyrightShow = data;
        },
        setPlayShow(state, data) {
            return state.playShow = data;
        },
        setActiveFlage(state, data) {
            return state.activeFlage = data;
        },
        setIslogin(state, data) {
            return state.islogin = data;
        },
        setUserInfoList(state, data) {
            return state.userInfoList = data;
        },
    },
    actions: {
        setUserInfoList(context, data) {
            //请求用户数据
            httpRequest({
                url: '/api/user/detail?uid=' + data
            }).then((data) => {
                let result = data.data;
                context.commit('setUserInfoList', result)
            }).catch((err) => {
                console.log(err);
            })
        },
    }
})

export default store;