const express = require('express')
const app = express();
app.listen(4500)
const data = require('./data')
const path = require('path')






//when you want to send the data u will use respose

app.get('',(req,resp)=>{
    //when you want to send the data u will use respose
    //when you eant to get the data throgh the client request you will use request
    resp.send("hello, welcome to home page")

    let name = req.query; // http://localhost:4500/?name=pradeep 
    console.log('name :', name); //this will print the name which i am semding through the above api

})

app.get('/about',(req,resp)=>{http://localhost:4500/about
    resp.send("hello, welcome to about page")
    let details = req.query;
    console.log('details :', details);
    
})
app.get('/help',(req,resp)=>{//localhost:4500/help
    resp.send("hello, welcome to help page")
})

// you can send the html data as well let see the example
app.get('/htmlresponse',(req,resp)=>{//htmlresponse
    let value = req.query.name
    resp.send(`
    <h1> hello my name is pradeeep singroul</h1>
    <input type="text", placeholder="enter you name" value=${value}>
    <button>click here</button>
    `)
})

// we can link the multile pages as well
app.get('/Linkpages',(req,resp)=>{////localhost:4500/Linkpages
    let value = req.query.name
    resp.send(`
    <h1> hello my name is pradeeep singroul</h1>
    <input type="text", placeholder="enter you name" value=${value}>
    <button>click here</button>
    </br>
    <a href="about">go to the about</a>
    `)
    // in line 45 i have linked the about page with 'linkpage'
})

//we cansend Json data as well let see the example

app.get('/jsondata',(req,resp)=>{//localhost:4500/jsondata
    resp.send(data)
})


const filePath = path.join(__dirname,"public")
app.use(express.static(filePath))//localhost:4500/home.html



//but if you dont want to show the file name like home.html ,about.html you want to show only home and  about then
// const filePath = path.join(__dirname,"public")
app.get('/homeyo',(req, resp)=>{
    resp.sendFile(`${filePath}/home.html`)
})

//if you user enter wrong url then you want ot show 404 page then
app.get('*',(req, resp)=>{
    resp.sendFile(`${filePath}/404Page.html`)
}) // now if user enter wrong user on 4500 port then 404page.html will show
