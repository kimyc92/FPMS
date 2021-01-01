<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">

                    <!-- <div> 
                        name : {{ item.user }}
                    </div> -->
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                    <slot name="username"></slot>
                    <slot name="time"></slot>
                    <slot name="karma"></slot>
                    <!-- name : <router-link :to="`/user/${userInfo.id}`">{{ userInfo.id }}</router-link> -->
                    <!-- <div calss="userInfo">
                        time : {{ item.time_ago }}
                        <slot name="time">
                    
                        </slot> 
                    </div> -->
                    
                </div>
            </div>
            <!-- <h2>title : {{ item.title }}</h2> -->
        </section>
        <section>
            <!-- <div v-html="item.content"> -->
                <!-- html 태그까지 한번에 들어가있을때 -->
            <!-- </div> -->
        </section>
    </div>
</template>

<script>
//import { mapGetters } from 'vuex';

export default {
//   props: {
//       info: Object
//   },
  //computed: {
      /*
    userInfo(){
      return this.$store.state.user;
    },
    */
    // ...mapGetters([
    //    'item',
    //    //'user',
    //  ]),
  //},
//   created() {
//     const path = this.$route.path;
//     if(path === '/item*'){


//     } else if(path === '/user*'){
       

//     }
    
//   }
}
</script>


<style scoped>
.user-container {
  padding: 15px;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 10px;
}
.time {
  font-size: 7px;
}
</style>