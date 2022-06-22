<template>
    <div class="l-content">
        <el-button type="info" icon="el-icon-d-arrow-left" size="small" class="button1"></el-button> 
        <h3 style="color:#fff">首页</h3>
        
        <el-dropdown trigger="click" size="mini" class="userlogo">
            <span>
                <img src="../assets/logo.png" class="imglogo">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>        
    </div>
</template>

<script>
export default {
    name:"Header",
    data() {
        return {
            
        }
    },

}
</script>

<style lang="less" scoped>
    .button1{
        display: block;
        float: left;
        background-color: #545c64;
        height: 60px;
    }
    .l-content{
        height:60px ;
        .userlogo{
            float: right;
        }
    }
    h3{
        display: inline-block;
        margin-left: 20px;
    }
    .imglogo{
        height: 40px;
        width: 40px; 
        border-radius: 50%;
        margin: 10px;
    }
</style>>

</style>