<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import Bus from '../utils/bus.js';

export default {
    components: {
        ListItem
    },
    created() {
      
    },
    mounted(){  // 화면에 인스턴스가 화면에 불러졌을 때
        console.log("꺼짐꺼짐");
        Bus.$emit('end:spinner');
    }
}
</script>

<style>

</style>