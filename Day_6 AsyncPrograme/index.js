console.log("starting points")

let a = 10
let b = 20

//setTimeout
let data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },1000)
})


//setInterval
// let count = 0;
// let interval = setInterval(()=>{
//     console.log("dfgdf")
//     count++;
//     if(count==10){
//         clearInterval(interval)//stopping the interval
//     }
// },1000)

data.then((dt)=>{
    console.log(a+dt)
})
console.log(a+b)
console.log('endPoint');


