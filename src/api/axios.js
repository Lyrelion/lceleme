// 引入 axios 处理前后端交互
import axios from 'axios'
// 引入 开发/发布 的路径配置
import config from '@/config'
// 判断 开发/发布环境
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
// console.log(process.env.NODE_ENV)

class HttpRequest{
    constructor(baseUrl){
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig(){
        const config = {
            baseURL:this.baseUrl,
            header:{
                //
            }
        }
        return config
    }
    interceptors(instance,url){
        // 配置请求拦截器
        instance.interceptors.request.use((config)=>{
            console.log('拦截和处理请求')
            config.data = {
                msg:"helloworld"
            }
            console.log(config)
            return config
        })
        // 配置响应拦截器
        instance.interceptors.response.use((res)=>{
            console.log("处理响应")
            console.log(res)
            return res.data
        },(error)=>{
            //请求出问题，处理问题
            console.log(error)
            return {error:"网络出错了"}
        })
    }
    request(options){
        // 创建 axios实例对象
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(),options)
        this.interceptors(instance,options.url)
        return instance(options)
    }
}

const axiosObj = new HttpRequest(baseUrl)
export default axiosObj
