const express = require('express')
const app = express();
app.listen(4500)
const data = require('./data')
//when you want to send the data u will use respose

app.get('',(req,resp)=>{
    //when you want to send the data u will use respose
    //when you eant to get the data throgh the client request you will use request
    resp.send("hello, welcome to home page")

    let name = req.query; // http://localhost:4500/?name=pradeep 
    console.log('name :', name); //this will print the name which i am semding through the above api

})

app.get('/about',(req,resp)=>{
    resp.send("hello, welcome to about page")
    let details = req.query;
    console.log('details :', details);
    
})
app.get('/help',(req,resp)=>{
    resp.send("hello, welcome to help page")
})

// you can send the html data as well let see the example
app.get('/htmlresponse',(req,resp)=>{
    let value = req.query.name
    resp.send(`
    <h1> hello my name is pradeeep singroul</h1>
    <input type="text", placeholder="enter you name" value=${value}>
    <button>click here</button>
    `)
})

//we cansend Json data as well let see the example

app.get('/jsondata',(req,resp)=>{
    resp.send(data)
})
