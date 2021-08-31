import router from "./index";
import store from "../store";
import Element from 'element-ui';
//路由守卫拦截
router.beforeEach((to, from, next) => {
    // console.log(to,to.matched);
    //1.进入守卫--判断是否有token
    if (!store.state.loginModule.token) {//没有登录
        // console.log('没有登录');
        if (to.matched.length > 0 && !to.matched.some(item => item.meta.isLogin)) { // 判断用户是否需要登陆
            // 不需要登陆直接跳转
            next();
        } else {
            // 未登陆
            // Maximum call stack size exceeded,越界
            next("/login")
        }
    } else {//登录过信息，存在token字段：1.本地没有导航数据  2.有导航信息
        console.log('登录了');
        if(store.state.routeModule.menuList<=0){
            console.log('没有导航数据---需要获取动态导航');
            store.dispatch('routeModule/getActionsRoutes')
            next()
        }else{//有导航
            console.log('有导航');
            //判断：进入的页面是否是登录页面，如果是登录界面，返回原路径
            if(to.path!=='/login'){
                next()
            }else{
                //进入登录界面
                // alert('您已经登录了！')
                // console.log('Element',Element);
                Element.Message.error('您已经登录了！')
                next(from.path)
            }
            next()
        }
        //判断进入当前的页面是否需要登录  sj:some()方法  遍历数组  找到满足条件的数据  返回true
        // if (to.matched.some(record => record.meta.isLogin)) {
        //     // 需要登录
        //     let token = store.state.loginModule.token;//已登录
        //     if (token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // } else {
        //     next()
        // }
    }
})