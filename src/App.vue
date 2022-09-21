<template>
  <div class="app-container">
    <h1>App 根组件--</h1>
    赋予力量值：<input type="text" v-model.number="PushPower"><br>
    <!-- 你的总力量：<input type="text" v-model.number="allPower"><br> -->
    <p>你的总力量：{{allPower}}</p>
    <button @click="toPushPower"> 赋予力量吧！</button>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      
      <Count @upPower="getPower" :init="PushPower" ref="countRef"></Count>

    </div>
  </div>
</template>

<script>
    import Left from '@/components/Left.vue'
    import Right from '@/components/Right.vue'
import Count from './components/Count.vue'
export default {
  components:{
    Left,
    Right,
    Count
},
  data(){
    return {
      allPower:0,
      PushPower:19
    }
  },
  methods:{
    getPower(val){
      // allPower+=val;
      console.log(val);
      this.allPower=val;
    },
    toPushPower(){
      this.$refs.countRef.list.power=this.PushPower;
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
