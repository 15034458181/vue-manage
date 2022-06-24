<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧区域 -->
    <el-col :span="8" style="margin-top:20px">
      <!-- 用户id卡 -->
      <el-card shadow="hover">
        <div class="homeuser">
          <div class="userup">
            <img src="../../src/assets/logo.png" class="userimg">
            <div class="userinfo">
              <p class="name">安安安</p>
              <p class="zhiwei">超级管理员</p>
            </div>
          </div>
          <div class="centerborde"></div>
          <div class="userdown">
            <p class="logintime">上传登录的时间：<span>2022-06-22</span></p>
            <p class="loginps">上次登录的地点：<span class="pos">西安</span></p>
          </div>
        </div>
      </el-card>
      <!-- 商品购买详情 -->
      <el-card style="margin-top:20px; hight:460px">
        <el-table :data="tableData">
          <el-table-column v-for="(val, key) in tableline" :key="key" :prop="key" :label="val"><!-- 遍历的是一个对象，所以key代表的是键名 -->
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧区域 -->
    <el-col :span="16" style="margin-top:20px;">
      <div class="one">
        <el-card v-for="item in countData" :key="item.name" shadow="hover" body-style="{display:flex,padding:0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="peice">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
        
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    name:'MyUser',
    data() {
        return {
            tableData:[
              {
                name:"oppo",
                todayBuy:100,
                monthBuy:500,
                totalBuy:800
              },
              {
                name:"vivo",
                todayBuy:100,
                monthBuy:500,
                totalBuy:800
              },
              {
                name:"小米",
                todayBuy:100,
                monthBuy:500,
                totalBuy:800
              },
              {
                name:"三星",
                todayBuy:100,
                monthBuy:500,
                totalBuy:800
              },
              {
                name:"华为",
                todayBuy:100,
                monthBuy:500,
                totalBuy:800
              },
              {
                name:"苹果",
                todayBuy:100,
                monthBuy:500,
                totalBuy:800
              },
            ],
            tableline:{
              name:'课程',
              todayBuy:"今日购买",
              monthBuy:"本月购买",
              totalBuy:"总购买"
            },
            countData:[
              {
                name:"今日支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9"
              },
              {
                name:"今日收藏订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9"
              },
              {
                name:"今日未支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9"
              },
              {
                name:"本月支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9"
              },
              {
                name:"本月收藏订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9"
              },
              {
                name:"本月未支付订单",
                value:1234,
                icon:"success",
                color:"#2ec7c9"
              }
            ],
        }
    },
}
</script>


  
<style lang="less" scoped> 
.userup{
  
  .userimg{
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background-color: skyblue;
    float: left;
    margin: 10px;
  }
  .userinfo{
    line-height: 5px;
    float: left;
    margin: 20px;
    p{
      text-align: center;
    }
    .name{
      font-size: 25px;
    }
    .zhiwei{
      color: rgb(199, 196, 196);
    }
  }
  &::after{
    content: "";
    display: block;
    clear: both;
  }
  
}
.userdown{
  .pos{
    margin-right: 25px;
  }
  span{
    float: right;
    text-align: center;
  }
}
.centerborde{
  margin: 5px 0 5px 0;
  border-bottom: 1px solid rgb(199, 196, 196);
}
.one{
  display: flex;
  width: auto;
  height: 400px;
  flex-wrap:wrap;
  div{
    position: relative;
    width: 31%;
    height: 40%;
    margin: 10px;
    .icon{
      position: absolute;
      top: 45%;
      left: 50px;
      transform:scale(5,5)
    }
    .detail{
      float: right;
      margin: 10px;
      width: 200px;
      .peice{
        font-size: 25px;
        text-align: center;
        
      }
      .txt{
        text-align: center;
      }

    }
    
  }
}


</style>