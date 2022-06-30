<template>
  <div class="tabs">
    <el-tag size="small" v-for="(tag,index) in tags" :key="tag.name" :closable="tag.name !== 'home'"
     :effect="$router.name === tag.name ? 'light':'dark'"
      @click="changeMenu(tag)" 
      @close="handerClose(tag,index)">{{tag.label}}</el-tag>
  </div>
</template>

<script>
// import router from 'router'
import {mapState,mapMutations} from "vuex"
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
        ...mapMutations({
            close:"closeTag"
        }),
        changeMenu(tag){
            if (this.$route.name !== tag.name) {
                this.$router.push({ name:tag.name })
            }
        },
        handerClose(tag,index){
           const length =  this.tags.length -1
           this.close(tag)
        //    如果删除时，路由的name和当前点击的标签的name不一致，说明当前页面和要删除的标签不对应，此时直接删标签就行
           if(tag.name !== this.$router.name){
                return 
           }
        //    只有最右边的标签才会得到下面这个条件，length = index  4 4，往左进行移动
           if(length === index){
                this.$router.push({
                    name:this.tags[index - 1].name
                })
           }else{
                // 向右跳转，为啥不用下面的加1呢，因为已经减了一个了，index中的数实际已经少了一个
                this.$router.push({
                    // name:this.tags[index + 1].name
                     name:this.tags[index-1].name
                })
           }
        }
    },
}
</script>

<style lang="less" scoped>
    .tabs{
        padding: 20px;
        border-bottom: 1px solid rgb(205, 205, 205);
        .el-tag{
            margin-right: 15px;
            cursor: pointer;
        }
    }
</style>