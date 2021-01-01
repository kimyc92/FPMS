<template>
    <div>
        <ul class="news-list">
            <li v-for="(list, index) in list" :key="index" class="post">
            <!-- {{ index }} -->
            <div>
                <div class="points">
                    {{ list.points || 0 }}
                </div>
            </div>
            <!-- 기타정보영역 -->
            <div>
                <!-- 타이틀 영역 -->
                <p class="news-title">
                    <template v-if="list.url">
                        <a v-bind:href="list.url">{{ list.title }}</a>
                    </template>
                    <template v-else>
                        {{ list.title }} 
                    </template>
                </p>
                
                <small class="link-text">
                    {{ list.time_ago }} by 
                    <router-link class="link-text" 
                        v-if="list.user"
                        v-bind:to="`/user/${ list.user }`">{{ list.user }}</router-link>
                        <a :href="list.url" v-else>
                            {{ list.domain }}
                        </a>
                </small>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
//import Bus from '../utils/bus.js';

export default {
    computed: {
        ...mapGetters([   // 객체가 아니라 배열로 바로 명칭이 같다면
            'list'
        ])
    },
    created(){
        /*
        const name = this.$route.name;
        let patchNm = '';
        if(name === "news"){
           patchNm = 'FETCH_NEWS';

        } else if(name === "jobs") {
            patchNm = 'FETCH_JOBS';

        } else if(name === "ask") {
            patchNm = 'FETCH_ASKS';

        }
        //console.log("버스시작");
        Bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch(patchNm) // 코드의 제어가 넘어감
                .then(() => {
                    //console.log("fetched");
                    Bus.$emit('end:spinner');
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);
        //this.$router.dispatch(actionName)
        */
    },/*
    destroyed(){
        this.$store.dispatch('RESET_STATE');
    }
    */
}
</script>

<style scoped>
.news-list {
  padding: 0px;
  margin: 0px;
}

.post {
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}
.news-title {
  margin: 0px;
}

.link-text {
  color: #828282
  
}

</style>