const fs = require('fs');
const path = require('path');

// let input = process.argv; //this is for input 
// if(input[2]=="add"){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=="remove"){
//     fs.unlinkSync(input[3])
// }else{
//     console.warn("invalid input")
// }

// iff you want to make multiple file in afolder

let drl = path.join(__dirname,"files")//it wil return the current folder path
//writeFiles
for(let i = 0; i<5; i++){
    fs.writeFileSync(`${drl}/hello_${i}.txt`, "hello bro, this is pradeep the owener of this file") //for create
    // fs.unlinkSync(`${drl}/hello_${i}.txt`)
}

//read file from folder drl line 15

fs.readdir(drl,(arr,files)=>{
    console.log('files', files); //it return the array of file names
    files.forEach((item)=>{ //printing file name from above array
        console.log('item', item);

    })
});


