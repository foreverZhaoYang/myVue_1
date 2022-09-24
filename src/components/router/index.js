import Vue from 'vue'
import vue from 'vue'
import VueRouter from 'vue-router'
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import A1 from '@/components/tabs/A1.vue'
import A2 from '@/components/tabs/A2.vue'

Vue.use(VueRouter);

const router=new VueRouter({
        routes: [
            {path:'/',redirect:'/left/1'},
            {path:'/left/:mid',component:Left,props:true},
            {path:'/right',component:Right,
        
        children:[
            {path:'',component:A1},
            {path:'a1',component:A1},
            {path:'a2',component:A2}
        ]
        }
        ]
})

export default router