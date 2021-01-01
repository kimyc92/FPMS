<template>
  <div>
      <!-- <div v-for="(job, index) in this.$store.state.jobs" :key="index">
        {{ job.title }}{{ index }}
      </div> -->
      <!-- <p v-for="(job, index) in this.$store.state.jobs" :key="index">
        {{ index }}
        <a :href="job.url">{{ job.title }}</a>
        <small>{{ job.time_ago }} by {{ job.domain }}</small>
      </p> -->

      <ul class="news-list">
        <li v-for="(job, index) in this.$store.state.jobs" :key="index" class="post">
          <!-- {{ index }} -->
          <div>
            <div class="points">
            
                {{ index }}
              
            </div>
          </div>
          <!-- 기타정보영역 -->
          <div>
              <p class="news-title">
                  <a v-bind:href="job.url">{{ job.title }}</a>
              </p>
              <small class="link-text">
                {{ job.time_ago }} by {{ job.domain }}
              </small>
          </div>
        </li>
      </ul>

  </div>
</template>

<script>
//import { fetchJobsList } from "../api/index.js";

export default {
  /*
  data() {
    return {
      jobs: []
    }
  },
  */
  created(){
    this.$store.dispatch('FETCH_JOBS'); // 코드의 제어가 넘어감
    /*
    fetchJobsList()
         .then(response => this.jobs = response.data)
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