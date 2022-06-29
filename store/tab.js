export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:"/home",
                name:"home",
                label:"首页",
                icon:"home"
            }
        ],
        currentMenu:null//高亮暂存区
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== "home"){
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMenu = null
            }
        },
        // 声明这个是为了使tab栏能够删除上面的数据
        closeTag(state,val){
            // 在tabList中查找与tab传来的数据中name相对应的数据的索引下标，！！！findIndex返回符合条件的数组下标
            const res = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(res,1)
        }
        
    }
}