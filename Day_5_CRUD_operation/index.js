const fs = require('fs');
const path = require('path')

const driPath = path.join(__dirname,"crud")
const fileName = `${driPath}/apple.txt`;

// creating file
fs.writeFileSync(fileName,"this is a simple file ")

// Updating file content
fs.appendFile(fileName," and the file name is apple.txt",(err)=>{
    if(!err) console.log("file has been updated")
    else console.log("some think went wrong")
})

//rename file
fs.rename(fileName,`${driPath}/upadatedApple.txt`,(err)=>{
    if(err) console.log("there is somethink eroor")
    else console.log("file rename succesfully")
})

//delete file
fs.unlinkSync(`${driPath}/upadatedApple.txt`);