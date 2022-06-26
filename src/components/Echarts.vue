<template>
  <div ref="echart"></div>
</template>

<script>
import *as echart from "echarts"
export default { 
    props:{
        isAxisChart:{
            type:Boolean,
            default:true
        },
        chartData:{
            type:Object,
            default(){
                return{
                    xData:[],
                    series:[]
                }
            }
        }
    },
    watch:{
        chartData:{
            deep:true,
            handler:function(){
                this.initChart()
            }
        }
    },
    methods:{
        initChart(){
            this.initChartData()
            if(this.echart){
                this.echart.setOption(this.options)
            }else{
                this.echart = echarts.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
        },
        initChartData(){
            if(this.isAxisChart){
                this.userOption.xAxis.data = this.chartData.xData
                this.userOption.series = this.chartData.series
            }else{
                this.bingOption.series = this.chartData.series
            }
        }
    },

    data() {
        return {
            userOption:{
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
                    type: 'bar',
                    data:data.userData.map(item => item.new)
                },
                {
                    name:"活跃用户",
                    type: 'bar',
                    data:data.userData.map(item => item.active)
                }
                ]
            },
            bingOption:{
                    tooltip:{
                    trigger: "item"
                    },
                    color:[
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                    ],
                    series:[
                    {
                        data:data.videoData,
                        type:"pie",
                        emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                        }
                    },
                    ]
            },
            echart:null
        }
    },
    computed:{
        options(){
            return this.isAxisChart ? this.userOption : this.bingOption
        }
    }

}
</script>

<style>

</style>