import Vue from 'vue';
import Vuex from 'vuex';

import mutations from "./mutations.js";
import actions from "./actions.js";
import cloneDeep from 'lodash/cloneDeep';

Vue.use(Vuex);

export const INITIAL_STATE = {
    // news: [],
    // jobs: [],
    // asks: [],
    user: {},
    item: {},
    list: []
};

const state = cloneDeep(INITIAL_STATE);  // cloneDeep 객체 전체를 깊은 복사(DeepCopy)

// Vuex : 상태관리 도구
export const store = new Vuex.Store({
    state,
    getters: {
        // asks(state){
        //     return state.asks;
        // },
        item(state){
            return state.item;
        },
        list(state){
            return state.list;
        },
        user(state){
            return state.user;
        }
    },
    mutations,
    actions
         
});

