<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';


export default {
  components: {
    ListItem,
  },
  
  created() {
    console.log(INITIAL_STATE);
  }
  
}
</script>

<style>

</style>