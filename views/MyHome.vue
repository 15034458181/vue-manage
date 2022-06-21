<template>
  <el-container>
    <el-aside width="auto">Aside</el-aside>
    <el-container style="hight: 100%">
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
    name:'MyHome',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="less" scoped>
  .el-header{
    background-color: #333;
  }
  .el-main{
    padding-top: 0;
  }
</style>