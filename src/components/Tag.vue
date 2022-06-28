<template>
  <div>
    <el-tag size="small" v-for="(tag,index) in tags" :key="tag.name" :closable="tag.name !== 'home'"
     :effect="$route.name===tag.name ? light:dark "
      @click="changeMenu(tag)" 
      @close="handerClose(tag,index)">{{tag.label}}</el-tag>
  </div>
</template>

<script>
// import router from 'router'
import {mapState} from "vuex"
export default {
    name:"Tag",
    data() {
        return {

        }
    },
    computed:{
        // 这时候我们在当前页面下拿到的this.tags就是我们保存在vuex中的tab中的tabsList数据
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        changeMenu(){
            this.$router.push({
                name:tag.name
            })
        },
        handerClose(){
            
        }
    },
}
</script>

<style>

</style>