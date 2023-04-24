//importnig from another file
const app = require('./Exporting')
console.log(app)
console.log('x :', app.x);
console.log('y :', app.y);





console.log("Day_1")

var a = 20;
var b = 21;
var c = 54;
var result = a+b+c;
console.log('result', result);
console.warn("warn " , result)

//conditions
var str1 = "pradeep";
var str2 = "pradeep";
if(str1==str2) console.log("yes it is equal");
 
//loops;
for(let i = 0; i<10; i++){

}

//array
let arr = [1,2,3,4,4,2,4,5,8,5,10]

//filter method is used to filter in array
let filtered = arr.filter((item)=>{
    return item%2==0
})
console.log(filtered)

//forEach
arr.forEach((s)=>{
    console.log(s)
})

//slice used to copy arr
let copied = arr.slice();
console.log(copied)

//isArray() used to determine the value is array or not

//include used to find the value is present or not
console.log(arr.includes(1))

//indexOf used to find the first index of passed value
console.log(arr.indexOf(5))

//reverse() used to reverse an array
console.log(arr.reverse())

//sort() used to sort an array it sort by aschi value so if you want o sort array logically so u need to pass a function
console.log(arr.sort())

let sortedArr = arr.sort(function(a,b){
    return (a-b)
})
let sortedArr1 = arr.sort((a,b)=>{
    return (a-b)
})
console.log(sortedArr)

//splice() used to update or delete element
let splicedArr = arr.splice(1,4);
console.log(splicedArr)









