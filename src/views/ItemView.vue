<template>
  <div>
      <section>
        <!-- 사용저 정보 -->
        <user-profile>
          <router-link slot="username" :to="`/user/${item.user}`">
              name : {{ item.user }}
          </router-link>
          <div slot="time">{{ 'posted '+item.time_ago }}</div>
        </user-profile>
        <!-- <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>
          <div class="user-description">
              name : <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
              <div calss="time">
              time_ago : {{ item.time_ago }}
              </div>
          </div>
        </div>
        <h2>title : {{ item.title }}</h2> -->
      </section>
      <section>

      </section>
      <section>
          <div v-html="item.content">
             <!-- html 태그까지 한번에 들어가있을때 -->
          </div>
ㅇㅇ
      </section>
      <!-- <p v-for="({{ itemInfo.comments }}, index) in asks" :key="index">
        {{ index }}
        <a :href="ask.url">{{ ask.title }}</a>
        <small>{{ ask.time_ago }} by {{ ask.user }}</small>
      </p> -->
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { 
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'item'
    ]),
    // itemInfo(){
    //   return this.$store.state.item;
    // },
  },
  created() {
    const userId = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM', userId);
  }
}
</script>

<style>

</style>