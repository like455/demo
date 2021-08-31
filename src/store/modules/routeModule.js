import {DynamicRoutes} from '../../router/dynamic-router';//
import { ruleRoutes } from '../../utils/ruleRoutes';//方法---匹配路由
import router,{ baseRoutes } from "../../router/index";
import api from '../../api';
export default {
    namespaced: true,
    state: {
        menuList: [], //路由导航
    },
    mutations: {
        setMuenList(state, payload) {
            state.menuList = payload
        },
        clearMenuList(state) {
            state.menuList = []
        }
    },
    actions: {
        //请求后台动态路由 
        //函数：promise   es6:async await  
        async getActionsRoutes({commit,rootState}){
            //1.获取后台动态路由
            let routes = await api.getPermission({token:rootState.loginModule.token})
            console.log(rootState);
            console.log('---后台路由--',routes.data.data);
            console.log('---前台路由--',DynamicRoutes);
            //2.获取前端路由 
            //3.前后端路由匹配模式 
            let menuArr=ruleRoutes(DynamicRoutes,routes.data.data)
            console.log('符合规则的路由信息',menuArr);
            //4.存储vuex
            commit('setMuenList',menuArr)
            //5.获取基础路由  给layOut组件  加动态路由
            let children=baseRoutes[0].children;['layOut/home']
            children.push(...menuArr)
            console.log(children);
            console.log('baseRoutes',baseRoutes);
            //6.路由数组合并新的路由 
            //路由合并方法
            router.addRoutes(baseRoutes)
            
        }

    }
}