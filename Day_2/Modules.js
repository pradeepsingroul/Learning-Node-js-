

// there are two type of modules
// -- global - we dont need to import it
// -- non global --  we need to import it

const fileSystem = require('fs');
const fs = require('fs').writeFileSync;
fileSystem.writeFileSync("introFile","my name is pradeep i am learnign node js andi am making txt file using node js")
fs("introFile1","my name is pradeep i am learnign node js andi am making txt file using node js")




