import Vue from 'vue'
import App from './App.vue'
import Count from "@/components/Count.vue";
import router from '@/components/router/index.js'

Vue.component('MyCount',Count);
Vue.directive('color',(el,binding)=>{
  el.style.color=binding.value
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
