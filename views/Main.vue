<template>
  <el-container class="side">

    <!-- 这狗日的是侧边栏 -->
    <el-aside width="auto">
      <CommonAside/>
    </el-aside>

    <el-container >
      <!-- 这狗日的是头部栏 -->
      <el-header>
        <Header/>
      </el-header>
      
      <!-- 这是主要区域 -->
      <el-main>
        <Tag/>
        <router-view></router-view>
      </el-main>
      
    </el-container>
  </el-container>
</template>


<script>
import CommonAside from "../src/components/CommonAside.vue"
import Header from "../src/components/Header.vue"
import Tag from "../src/components/Tag.vue"
export default {
    name:'MyHome',
    data() {
        return {

        }
    },
    components:{
      CommonAside,
      Header,
      Tag
    }
}
</script>

<style lang="less" scoped>
  .el-header{
    background-color: #333;
    padding: 0;
  }
  .el-main{
    padding-top: 0;
  }
  .side{
    height: 100%;
  }
</style>