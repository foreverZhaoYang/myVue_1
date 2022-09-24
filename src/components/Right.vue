<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr>
    <!-- <MyCount :init="9"></MyCount> -->
    <router-link to="/right/A1">a1</router-link>
    <router-link to="/right/A2">a2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  
export default {}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
