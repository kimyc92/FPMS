//import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
//import { fetchUserInfo } from "../api/index.js";
import { fetchUserInfo, 
         fetchItemInfo, 
         fetchList 
        } from "../api/index.js";

export default {

    RESET_STATE({ commit }){
        return commit('SET_STATE');
    },
    // FETCH_NEWS(context){   // actions.은 context 가 기본으로 제공
    //     fetchNewsList()
    //         .then(response => {
    //             //console.log(response.data);
    //             // 뮤테이션을 통해서 state에 넣어야 됨
    //             context.commit('SET_LIST', response.data);   // 뮤테이션에 제어를 넘김
    //             //this.state.news = response.data;   // 이건 안됨 바로 state로 넘어갈 수 없음
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_JOBS(context){
    //     fetchJobsList()
    //         .then(response => {
    //             //console.log(response.data);
    //             // 뮤테이션을 통해서 state에 넣어야 됨
    //             context.commit('SET_LIST', response.data);   // 뮤테이션에 제어를 넘김
    //             //this.state.news = response.data;   // 이건 안됨 바로 state로 넘어갈 수 없음
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_ASKS(context){
    //     fetchAskList()
    //         .then(response => {
    //             //console.log(response.data);
    //             // 뮤테이션을 통해서 state에 넣어야 됨
    //             context.commit('SET_LIST', response.data);   // 뮤테이션에 제어를 넘김
    //             //this.state.news = response.data;   // 이건 안됨 바로 state로 넘어갈 수 없음
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // #2
    // Async
    async FETCH_LIST({ commit }, name){
        try {
            const response = await fetchList(name);
            commit('SET_LIST', response.data); 
            return response;  // 어떤것들을 리턴하던간에 promise가 리턴이 된다.
        } catch(error){
            console.log(error);
        }
        
    },
    /* Promise
    FETCH_LIST({ commit }, name){
        // #3
        return fetchList(name)
            .then(({ data }) => {
                // #4
                console.log(4);
                commit('SET_LIST', data); 
                //return response;
            })
            .catch(error => {
                console.log(error);
            })
    },
    */
    async FETCH_USER({ commit }, usernmae){
        try {
            const response = await fetchUserInfo(usernmae);
            commit('SET_USER', response.data);
            return response;
        } catch(error){
            console.log(error);
        }
    },
    async FETCH_ITEM({ commit }, itemname){
        // try ~catch 는 api 단에서도 할 수 있음 확인 ㄱㄱ
        const response = await fetchItemInfo(itemname)
        commit('SET_ITEM', response.data);
        return response;
        
    },
}