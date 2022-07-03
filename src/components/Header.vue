<template>
    <div class="l-content">
        <el-button type="info" icon="el-icon-d-arrow-left" size="small" class="button1" @click="handleMenu()" ></el-button> 
        <el-breadcrumb separator="/" class="mianbao">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path:item.path  }">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-dropdown trigger="click" size="mini" class="userlogo">
            <span>
                <img src="../assets/logo.png" class="imglogo">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"Header",
    data() {
        return {

        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        logOut(){
            this.$store.commit("cleraToken")
            this.$store.commit("clearMenu")
            this.$router.push({name:"login"})
        }
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
        })

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
        .mianbao{
            width: 500px;
            float: left;
            font-size: 26px;
        }
    }
    h3{
        display: inline-block;
        margin-left: 20px;
    }
    .imglogo{
        float: right;
        height: 40px;
        width: 40px; 
        border-radius: 50%;
        margin: 10px;
    }
</style>>

</style>