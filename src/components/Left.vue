<template>
  <div class="left-container">
    <h3>Left 组件--{{ this.$route.params.mid }}--{{mid}}</h3>
    <hr>
    <!-- <MyCount :init="10" ></MyCount> -->
  </div>
</template>

<script>
export default {
  props:['mid']
  
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
