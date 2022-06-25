// mock的数据模拟过程
import Mock from 'mockjs'


// 图标数据模拟
let List = []
export default {
    getStatisticalData:()=>{
        // Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for(let i = 0;i<7;i++){
            List.push(
                Mock.mock({
                    苹果:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    oppo:Mock.Random.float(100,8000,0,0),
                    魅族:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0)
                })
            )
        }
        return {
            code:20000,
            data:{
                // 饼状图数据生成
                videoData:[
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'苹果',
                        value:5999
                    },
                    {
                        name:'vivo',
                        value:1500
                    },
                    {
                        name:'魅族',
                        value:2200
                    },
                    {
                        name:'三星',
                        value:4500
                    },
                    {
                        name:'oppo',
                        value:1999
                    },
                ],
                // 柱状图数据生成
                userData:[
                    {
                        date:'周一',
                        new:5,
                        active:200
                    },
                    {
                        date:'周二',
                        new:10,
                        active:500
                    },
                    {
                        date:'周三',
                        new:12,
                        active:550
                    },
                    {
                        date:'周四',
                        new:60,
                        active:800
                    },
                    {
                        date:'周五',
                        new:65,
                        active:880
                    },
                    {
                        date:'周六',
                        new:55,
                        active:580
                    },
                    {
                        date:'周日',
                        new:40,
                        active:400
                    },
                ],
                // 折线图数据生成
                orderData:{
                    date:['20220601','20220602','20220603','20220604','20220605','20220606','20220607'],
                    data:List
                },
                tableData: [
                    {
                        name:'oppo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'vivo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'魅族',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'三星',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'小米',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'苹果',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'oppo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                ]

            }
            
        }
    }
}