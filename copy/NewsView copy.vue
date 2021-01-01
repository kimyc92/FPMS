<template>
  <div>
      <!-- <div v-for="(user, index) in this.$store.state.news" :key="index">
        {{ user.title }}{{ index }}
      </div> -->
      <ul class="news-list">
        <li v-for="(user, index) in this.$store.state.news" :key="index" class="post">
          <!-- {{ index }} -->
          <div>
            <div class="points">
                {{ user.points }}
            </div>
          </div>
          <!-- 기타정보영역 -->
          <div>
              <p class="news-title">
                  <a v-bind:href="user.url">{{ user.title }}</a>
              </p>
              <small class="link-text">
                  {{ user.time_ago }} by 
                  <router-link class="link-text" v-bind:to="`/user/${user.user}`">{{ user.user }}</router-link>
              </small>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
//import axios from "axios";


export default {
  /*
  data() {
    return {
      users: []
    }
  },
  */
  created(){
    this.$store.dispatch('FETCH_NEWS'); // 코드의 제어가 넘어감
    /*
    fetchNewsList()
         .then(response => this.users = response.data)
         .catch(error => console.log(error));
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