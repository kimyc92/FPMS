<template>
  <div>
      <!-- <div v-for="(ask, index) in asks" :key="index">
        {{ ask.title }}{{ index }}
      </div> -->
      <!-- <p v-for="(ask, index) in asks" :key="index">
        {{ index }}
        <a :href="ask.url"></a>
        
      </p> -->

      <ul class="news-list">
        <li v-for="(ask, index) in asks" :key="index" class="post">
          <!-- {{ index }} -->
          <div>
            <div class="points">
                {{ ask.points }}
            </div>
          </div>
          <!-- 기타정보영역 -->
          <div>
              <p class="news-title">
                  <a v-bind:href="ask.url">{{ ask.title }}</a>
              </p>
              <small class="link-text">
                {{ ask.time_ago }} by
                <router-link class="link-text" v-bind:to="`/user/${ask.user}`">{{ ask.user }}</router-link>
              </small>
          </div>
        </li>
      </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  /*
  data() {
    return {
      asks: []
    }
  },
  */
 computed: {
   ...mapGetters([   // 객체가 아니라 배열로 바로 명칭이 같다면
     'asks'
   ])
  // #2
  //  ...mapState({
  //    //asks: state => state.asks
  //    asks: state => state.asks
  //  })
  // #1
  //  ask() {
  //    return this.$store.state.asks;
  //  }
 },
 created(){
    this.$store.dispatch('FETCH_ASKS'); // 코드의 제어가 넘어감
    /*
    fetchAskList()
         .then(response => this.asks = response.data)
         .catch(error => console.log(error))
    */
  }
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