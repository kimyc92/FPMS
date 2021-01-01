//import cloneDeep from 'lodash/cloneDeep';
import { INITIAL_STATE } from './index.js';
import cloneDeep from 'lodash/cloneDeep';

export default {
    /*
    SET_NEWS(state, list) {   // 향상된 객체 리터럴 본래 SET_NEWS: function () {} 임, 첫번쨰 인자는 state 필수
        //state.news = news;
        state.list = list;
    },
    SET_JOBS(state, list) {
        //state.jobs = jobs;
        state.list = list;
    },
    SET_ASKS(state, list) {
        //state.asks = asks;
        state.list = list;
    },
    */
    SET_LIST(state, list) {
        state.list = list;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    },
    SET_STATE(state) {
        Object.assign(state, cloneDeep(INITIAL_STATE));
    }
    
}