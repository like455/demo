/**
 * 功能：匹配前后台路由对比，找到符合规则的路由信息
 * 参数：
 *  webRoutes   前端定义路由数组
 *  serverRoutes   后台返回的动态路由  数组
 */

export function ruleRoutes(webRoutes, serverRoutes) {
    //定义符合规则数据
    let menuList = []
    webRoutes.forEach(item => {
        // console.log(item);
        serverRoutes.forEach(ele => {
            if (item.meta.name === ele.name) {//一级name判断  里面有children
                if (ele.children && ele.children.length > 0) {
                    item.children=ruleRoutes(item.children,ele.children)
                }
                menuList.push(item)
            }
        })
    });
    return menuList
}