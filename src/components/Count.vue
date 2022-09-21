<template>
    <div>
      <h4>这是Count全局组件</h4>    

      <p>您的力量:{{ list.power }}</p> 
      <button @click="stronger">力量加2</button><br>
      
      r:<input type="text" v-model.number="r"><br> g:<input type="text" v-model.number="g"><br> b:<input type="text" v-model.number="b"><br>
      <div class="myBox1" :style="{backgroundColor:rgb}">{{rgb}}</div>
    </div>
 
</template>

<script>
import bus from "@/components/eventBus.js";

export default { 
  props: {
    init: {
      default: 0,
      type: Number,
      required:true
    },
  },

  data() {
    return {
      list:{
        power: this.init
      },
      r:100,g:210,b:50,    

    };
  },

  watch:{
    // power(newVal,oldVal){
    //     console.log('原来的值'+oldVal);
    //     console.log('恭喜您变强了，现在的值'+newVal+'\t');
    // },
    'list.power':{
        handler(newVal,oldVal){      
        this.$emit('upPower',this.list.power);
        if(newVal>oldVal){
      console.log('恭喜您变强了，现在的值'+newVal+'\t');
        }else{
          console.log("遭到虚弱攻击变弱了，力量为"+newVal);
        }

    }
    }
  },

  methods: {
    stronger() {
      this.list.power += 2;
    },
  },

  computed: {
    rgb() {
          return `rgb(${this.r}, ${this.g}, ${this.b})` 
        }
  }
};
</script>

<style lang="less">
    .myBox1 {
        width: 150px;
        height: 50px;
    }
</style>