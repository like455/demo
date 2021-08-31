import axios from "../utils/request";
//基础路径
const base={
    host:'http://localhost:3434',
    login:'/api/login',//登录接口
    permission:'/api/permission',//动态路由
}


// 请求方法
const api={
    /**
     * 登录接口
     */
    getLogin(params){
        return axios.post(base.host+base.login,params)
    },
    /**
     * 动态路由
     */
    getPermission(params){
        return axios.get(base.host+base.permission,{
            params
        })
    }
}

export default api