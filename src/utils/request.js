//引入axios 
import axios from 'axios';
import qs from 'querystring';

//响应错误处理方法 
/**
 * 常用的http协议状态码 
 * 2xx  成功
 * 3xx  4xx  5xx 
 * status 状态码
 * info:错误信息
 */
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('400-表示请求报文中存在语法错');
            break;
        case 401:
            console.log('401-未经许可，需要通过HTTP认证');
            break;
        case 403:
            console.log('403-服务器拒绝该次访问（访问权限出现问题）');
            break;
        case 404:
            console.log('404-表示服务器上无法找到请求的资源');
            break;
        case 500:
            console.log('500-表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；');
            break;
        case 503:
            console.log('503-表示服务器暂时处于超负载或正在进行停机维护，无法处理请求');
            break;
        default:
            console.log(info);
            break;
    }
}

//创建实例
const instance = axios.create({
    //公共配置
    // baseURL: 'http://iwenwiki.com', //公共的请求的地址 
    timeout: 5000, //请求超时等待时间
})

/*
 * 拦截器
 */
//添加请求拦截器 
instance.interceptors.request.use(
    config => {
        //功能：如果是post请求 处理发送的参数 
        if (config.method === 'post') {
            //处理post发送的数据格式：config.data
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => Promise.reject(error)
)

//添加响应拦截器
instance.interceptors.response.use(
    //请求响应的成功数据 
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        //接受错误里面的响应数据
        const { response } =error;
        errorHandle(response.status,response.info)
    }
)


//导出instance 
export default instance