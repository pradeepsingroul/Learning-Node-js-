const http = require('http')
const colors = require('colors')
const data = require('./data')

// let object = {
//     name:"pradeep singroul",
//     email:'prasingroul4899@gmail.com',
//     city: "satna mp"
// }
let HTTPCODE = 200;
http.createServer((req,resp)=>{
    resp.writeHead(HTTPCODE,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(4500)
//localhost:4500 api

console.log("pradeep singroul".red)