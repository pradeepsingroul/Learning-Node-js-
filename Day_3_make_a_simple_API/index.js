const http = require('http')
const colors = require('colors')

let object = {
    name:"pradeep singroul",
    email:'prasingroul4899@gmail.com',
    city: "satna mp"
}

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(object))
    resp.end();
}).listen(4500)

console.log("pradeep singroul".red)