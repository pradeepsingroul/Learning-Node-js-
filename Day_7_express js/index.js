const express = require('express')
const app = express();
app.listen(4500)

app.get('',(req,resp)=>{
    resp.send("hello, welcome to home page")
})

app.get('/about',(req,resp)=>{
    resp.send("hello, welcome to about page")
})
app.get('/help',(req,resp)=>{
    resp.send("hello, welcome to help page")
})

