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

      <div class="two">
        <div class="ecr">
          <el-card style="height:280px">
            <div style="height:280px" ref="echarts"></div>
          </el-card>
        </div>

        <div class="graph">
          <el-card style="height:260px" class="userecharts">
            <div style="height:240px" ref="userecharts"></div>
          </el-card>
          <el-card style="height:260px" class="userecharts2"></el-card>
        </div>

      </div>

    </el-col>
  </el-row>
</template>

<script>
// 引入我们mock生成的假数据
import { getData } from '../../api/data.js'

// 引入echarts
import *as echarts from "../../../node_modules/echarts/dist/echarts.js"
export default {
    name:'MyUser',
    data() {
        return {
            tableData:[
              // {
              //   name:"oppo",
              //   todayBuy:100,
              //   monthBuy:500,
              //   totalBuy:800
              // },
              // {
              //   name:"vivo",
              //   todayBuy:100,
              //   monthBuy:500,
              //   totalBuy:800
              // },
              // {
              //   name:"小米",
              //   todayBuy:100,
              //   monthBuy:500,
              //   totalBuy:800
              // },
              // {
              //   name:"三星",
              //   todayBuy:100,
              //   monthBuy:500,
              //   totalBuy:800
              // },
              // {
              //   name:"华为",
              //   todayBuy:100,
              //   monthBuy:500,
              //   totalBuy:800
              // },
              // {
              //   name:"苹果",
              //   todayBuy:100,
              //   monthBuy:500,
              //   totalBuy:800
              // },
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
    mounted() {
      // // axios使用实例，向服务器发出请求
      // this.$http.get('/uesr?ID=12345')
      // .then(function(response){
      //   console.log(response);
      // })
      // .catch(function(error){
      //   console.log(error);
      // })
      getData().then(res => {
        const {code,data} = res.data
        if(code === 20000){
          // 判断状态，如果成功，把数据送入我们的vue组件的数据中
          this.tableData = data.tableData

          // 格式化echarts可视化所需要的数据
          const order = data.orderData
          const KeyArray = Object.keys(order.data[0])
          const series = []

          // 遍历什么玩意，我这个看不懂，反正是把最重要的series给格式化好了
          KeyArray.forEach(key => {
            series.push({
              name:key,
              data:order.data.map(item => item[key]),
              type:"line"
            })
          })

          // 定义配置数据
          const option = {
            // x轴的数据
            xAxis:{
              data:order.date
            },
            // y轴的数据
            yAxis:{
            },
            // 折线类别提示
            legend:{
              data:KeyArray
            },
            // 所需数据
            series:series
          }
          // 获取dom节点
          const E = echarts.init(this.$refs.echarts);
          // 拿到节点后，传入配置进行绘图
          E.setOption(option);


          // 这个地方画用户图

          // 这是用户图的数据图配置
          const userOption = {
            legend:{
              // 图例文字的颜色
              textStyle:{
                color:"#333"
              }
            },
            grid:{
              left:"20%"
            },
            tooltip:{
              trigger:"axis"
            },
            xAxis:{
              type:"category",
              data:data.userData.map(item => item.date),
              axisLine:{
                lineStyle:{
                  color:"#17b3a3"
                }
              },
              axisLabel:{
                interval:0,
                color:"#333"
              },
            },
            yAxis:[
              {
                type:"value",
                axisLine:{
                  lineStyle:{
                    color:"#17b3a3"
                  }
                }
              }
            ],
            color:["#2ec7c9","#b6a2de"],
            series:[
              {
                name:"新增用户",
                data:data.userData.map(item => item.new)
              },
              {
                name:"活跃用户",
                data:data.userData.map(item => item.active)
              }
            ]
          }

          // 获取dom元素
          const U = echarts.init(this.$refs.userecharts)
          // 拿到节点后，传入配置进行绘图
          U.setOption(userOption);



        }
        console.log(res);
      })

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
  height: 200px;
  flex-wrap:wrap;
  margin-bottom: 10px;
  overflow: hidden;
  div{
    position: relative;
    width: 31%;
    height: 40%;
    margin: 10px;
    // overflow: hidden;
    .icon{
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 80px;
    }
    .detail{
      float: right;
      width: 150px;
      top: -10px;
      // overflow: hidden;
      .peice{
        margin: 0;
        text-align: center;
        font-size: 20px;
        // overflow: hidden;
      }
      .txt{
        margin: 0;
        text-align: center;
      }

    }
    
  }
}
.two{
  display: flex;
  flex-wrap:wrap;
  .ecr{
    width: 100%;
    border: 1px red solid;
  }
  .graph{
    display: flex;
    width: 100%;
    .userecharts{
      width: 50%;
    }
    .userecharts2{
      width: 49%;
      margin-left: 2px;
    }
    // :nth-child(1){
    //   width: 49%;
    //   border: 1px skyblue solid;
    // }
    // :nth-child(2){
    //   width: 49%;
    //   margin-left: 20px;
    //   border: 1px green solid;
    // }
  }
}

</style>