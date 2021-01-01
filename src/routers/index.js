import Vue from 'vue'
import VueRouter from 'vue-router';
/*
import NewsView from '../views/NewsView.vue';
import AskView  from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
*/
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';
import ListView from '../views/ListView.vue';
import Bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',    // url 상에 # 제거
    routes: [
        {
            // path : url 주소
            path: '/',
            redirect: 'news'
        },
        {
            // path : url 주소
            path: '/news',
            name: 'news',
            // component : url 주소로 갔을 대 표시될 컴포넌트
            component: ListView,
            //component: createListView('news'),
            /*
            beforeEnter: (to, from, next) => {
                console.log('to', to);      // 이동할 url의 라우터 정보
                console.log('from', from);  // 어디서부터 이동되는지에 대한 라우터 정보
                console.log('next', next);  // 
                if(to.auth){
                    next();     // next를 호출해줘야 이동시켜줌
                } else {
                    router.relpace('/login');
                }
                
            }
            */
            beforeEnter: (to, from, next) => {
               
                Bus.$emit('start:spinner');
                setTimeout(() => {
                    // #1
                    store.dispatch('FETCH_LIST', to.name) // 코드의 제어가 넘어감
                        .then(() => next())
                        .catch((error) => {
                            console.log(error);
                        });
                }, 0);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            //component: AskView,
            component: createListView('ask'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            //component: JobsView,
            component: createListView('jobs'),
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        }
    ]
});

// console.log(router);