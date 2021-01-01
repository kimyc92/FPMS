<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue';
import Spinner from './components/Spinner.vue';
import Bus from './utils/bus.js'

export default {
  components: {
    ToolBar, // template에 넣을떄는 tool-bar 처럼 케밥으로 바꾼다. 자동링크가 생성 됨.
    Spinner,
  },
  data(){
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpiiner(){
      this.loadingStatus = true
    },
    endSpinner(){
      this.loadingStatus = false
    }
  },
  created() {
    Bus.$on('start:spinner', this.startSpiiner);
    Bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // 이벤트 버스는 off를 해줘야 이벤트객체가 쌓이지 않는다.
    Bus.$off('start:spinner', this.startSpiiner);
    Bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.1;
}

a {
  color: #34495e;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}
</style>
