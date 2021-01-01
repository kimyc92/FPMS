// 이벤트 버스는 빈 이벤트 객체를 만들어서 컴포넌트간에 데이터를 전달해주는 역할
import Vue from "vue";

/*
// bus.js
export const bus = new Vue();

// App.vue
import {bus } from './bus.js';
*/

export default new Vue();
