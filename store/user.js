import Cookie from "js-cookie"
export default{
    state:{
        token:""
    },
    mutations:{
        setToken(state,value){
            state.token = value 
            // 写入Cookie，传入两个参数，1.定义的cookie名称，2.保存的值
            Cookie.set("token",value)
        },
        cleraToken(state){
            state.token = ""
            //移除对应名字的cookie
            Cookie.remove("token")
        },
        getToken(state){
            //获取对应名字的cookie
            state.token =  state.token || Cookie.get("token")
        }
    }
}