<template>
    <!-- 侧边栏的代码 -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
    background-color="#545c64" 
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose" 
    :collapse="isCollapse">
        <h3 class="biaoti">通用后台管理系统</h3>
        <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="clickRoute(item)">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>    
        
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">

            <template slot="title">
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{item.label}}</span>
            </template>

            <el-menu-item-group v-for="Citem in item.children" :key="Citem.path" ><!-- 好像不起作用 --> 
                <el-menu-item :index="Citem.path" @click="clickRoute(Citem)">{{Citem.label}}</el-menu-item><!--点击绑定事件得配置到这个里面 -->  
            </el-menu-item-group>

        </el-submenu>
    </el-menu>  
</template>

<script>
  export default {
    name:"CommonAside",
    data() {
      return {
        isCollapse: false,
        menu:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            },
            {
                path:'/mall',
                name:'mall',
                label:'商品管理',
                icon:'video-play',
                url:'MallManage/MallManage'
            }, 
            {
                path:'/user',
                name:'user',
                label:'用户',
                icon:'user',
                url:'UserManage/UserManage'
            }, 
            {
                label:'其他',
                icon:'location',
                children:[
                {
                    path:'/page1',
                    name:'page1',
                    label:'页面1',
                    icon:'setting',
                    url:'Other/PageOne'
                },
                {
                    path:'/page2',
                    name:'page2',
                    label:'页面2',
                    icon:'setting',
                    url:'Other/PageTwo'
                },

                ]
            },                                                           
        ]
      };
    },
    computed:{
        noChildren(){
            return this.menu.filter(item => !item.children)
        },
        hasChildren(){
            return this.menu.filter(item => item.children)
        },
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickRoute(item){
        this.$router.push({
            name:item.name
        })
        this.$store.commit('selectMenu',item)
      }
    }
  }
</script>

<style lang="less" scoped >
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    }
    .el-menu{
        height: 100%;
        border: none
    }

    .biaoti{
        text-align: center;
        line-height: 48px;
        color: rgb(239, 237, 242);
    }
</style>