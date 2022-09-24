<template>
  <div class="app-container">
    <h1>App 根组件--</h1>
    <router-link to="/left/1">left组件1</router-link><br>
    <router-link to="/left/2">left组件2</router-link><br>
    <router-link to="/left/3">left组件3</router-link><br>

    <router-link to="/right">right组件</router-link><br>
    <span @click="changeColor">赋予力量值：</span
    ><input type="text" v-model.number="PushPower" /><br />
    <!-- 你的总力量：<input type="text" v-model.number="allPower"><br> -->
    <p v-color="color">你的总力量：{{ allPower }}</p>
    <button @click="toPushPower">赋予力量吧！</button>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->

      <Count @upPower="getPower" :init="PushPower" ref="countRef"></Count>
      <!-- 路由占位符 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Count from "./components/Count.vue";
export default {
  directives: {
    // color:{
    //   bind(el,binding){
    //     el.style.color=binding.value
    //   },
    //   update(el,binding){
    //     el.style.color=binding.value
    //   }
    // }
    // color(el,binding){
    //     el.style.color=binding.value
    //   }
  },
  components: {
    Left,
    Right,
    Count,
  },
  data() {
    return {
      allPower: 0,
      PushPower: 19,
      color: "red",
    };
  },
  methods: {
    getPower(val) {
      // allPower+=val;
      console.log(val);
      this.allPower = val;
    },
    toPushPower() {
      this.$refs.countRef.list.power = this.PushPower;
    },
    changeColor() {
      this.color = "green";
    },
  },
};
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
