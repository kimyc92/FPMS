<template>
  <div>
      <user-profile>
          <div slot="username">name : {{ user.id }}</div>
          <span slot="time">{{ 'Joined '+user.created }},</span>
          <span slot="karma">{{ user.karma }}</span>
      </user-profile>
      <!-- <user-profile :info="userinfo"></user-profile> props로도 내릴 수 있음-->
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      //'item',
      'user'
    ]),
    // itemInfo(){
    //   return this.$store.state.item;
    // },
  },
  // computed: {
  //   userInfo(){
  //     return this.$store.state.user;
  //   }
  // },
   created() {
     const userNm = this.$route.params.id;
     this.$store.dispatch('FETCH_USER', userNm);
   }
}
</script>

<style>

</style>