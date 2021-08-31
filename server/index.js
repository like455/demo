const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({
    extended: true
})) //post请求
const vipLogin = require("./data/vip_login.json");
const adminLogin = require("./data/admin_login.json");
const adminPermission = require("./data/admin_permission.json");
const vipPermission = require("./data/vip_permission.json");

//登录接口
// app.post('/login', (req, res) => {
//     let user = req.body.user;
//     let pwd = req.body.pwd;
//     res.send({
//         user,
//         token:'lalalala'
//     })
// })
 
//登录-分权限 1. 超级管理员 admin   2. 其他账号 vip账号 3.
app.post("/api/login", (req, res) => {
    const username = req.body.user;
    if (username === 'admin') {
        res.send(adminLogin)
    } else {
        res.send(vipLogin)
    }
})
//用户权限数据接口
app.get("/api/permission", (req, res) => {
    const token = req.query.token;
    if (token === 'admin') {
        res.send(adminPermission)
    } else {
        res.send(vipPermission)
    }
})

app.listen(3434,()=>{
    console.log(3434);
})