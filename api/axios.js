// 我们自己封装一个axios工具
import axios from "axios"
import config from "../config"

// 判断当前环境类型，来获取不同的接口地址
const baseUrl = process.env.NODE_ENV === "development" ? config.baseUrl.dev : pro

// 接下来重头戏，进行axios的二次封装！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

// 创建一个类,我怀疑这个类就工具包，里面要写各种工具
class HttpRequest {
    // 配置小工具
    constructor(baseUrl){   
        this.baseUrl = baseUrl
    }

    getInsideConfig(){
        const config = {
            baseUrl:this.baseUrl,
            header:{

            }
        }
        return config
    }
    
    // 这是个拦截器
    interceptors(instance){
    // 添加请求拦截器
        instance.interceptors.request.use(function(config){
            // 在发送请求之前做什么
            return config;
        },function(error){
            // 对请求错误做些什么
            return Promise.reject(error)
        });

    // 添加响应拦截器
        instance.interceptors.request.use(function(response){
            // 对响应数据做些什么
            return response;
        },function(error){
            // 对响应错误做些什么
            return Promise.reject(error)
        });
    }

    request(options){
        const instance = axios.create()
        options = {...this.getInsideConfig(),...options}
        this.interceptors(instance)
        return instance
    }
}
// 导出这个实例包，我怀疑只有new了之后才能使用
export default new HttpRequest(baseUrl)




