

// there are two type of modules
// -- global - we dont need to import it
// -- non global --  we need to import it

const fileSystem = require('fs');
const fs = require('fs').writeFileSync;
fileSystem.writeFileSync("introFile.txt","my name is pradeep i am learnign node js andi am making txt file using node js")
fs("introFile1.txt","my name is pradeep i am learnign node js andi am making txt file using node js")


const colors = require('colors')
console.log("installed colors package".red)





