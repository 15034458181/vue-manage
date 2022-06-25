// 我们自己封装一个axios工具
import axios from "axios"
import config from "../config"

// 判断当前环境类型，来获取不同的接口地址
const baseUrl = process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro

// 接下来重头戏，进行axios的二次封装！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
// 创建一个类,我怀疑这个类就工具包，里面要写各种工具
class HttpRequest {
// 1.class模式里都是严格模式，他 的实例生成必须通过 new方法来生成
// 2.他还是基于原型来实现的，原型继承的问题他也会遇到 
    // 下面这个家伙是主要的构造器，他接受所有的构造器变量
    constructor(baseUrl){   
        this.baseUrl = baseUrl
    }

// 下面这些在class里直接声明的方法就是类方法，就相当于基于原型继承的构造函数添加的方法
// 等同与下面这个 添加方法 的 方法
// HttpRequest.prototype.getInsideConfig = function(){}

    getInsideConfig(){
        const config = {
            baseUrl:this.baseUrl,
            header:{}
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
        instance.interceptors.response.use(function(response){
            // 对响应数据做些什么
            console.log(response);
            return response;
        },function(error){
            // 对响应错误做些什么
            console.log(error);
            return Promise.reject(error)
        });
    }

    request(options){
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options}
        this.interceptors(instance)
        return instance(options)
    }
}
// 导出这个实例包，我怀疑只有new了之后才能使用
export default new HttpRequest(baseUrl)




