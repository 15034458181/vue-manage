import Cookies from "js-cookie"
import router from "vue-router"

export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:"/",
                name:"home",
                label:"首页",
                icon:"home"
            }
        ],
        currentMenu:null,//高亮暂存区
        menu:[]
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
        },
        setMenu(state,value){
            state.menu = value
            Cookies.set("menu",JSON.stringify(value))
        },
        clearMenu(state){
            state.menu = [],
            Cookies.remove("menu")
            console.log("清除了原来的menu");
        },
        addMenu(state,router){
            if(!Cookies.get("menu")){
                return
            }
            const menu = JSON.parse(Cookies.get("menu"))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = ()=> import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component = ()=> import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由的动态添加
            menuArray.forEach(item =>{
                router.addRoute("Main",item)
                console.log("动态添加了路由",menuArray);
            })
        }
        
    }
}