const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', {encoding: 'utf-8'}); //telling node where to read the data from
const writeStream = fs.createWriteStream('./docs/blog3.txt', {encoding: 'utf-8'}); // writing data to node

// readStream.on('data', (chunk) => {
// console.log("-------- New chunk ------ " ); 
// console.log(chunk);
// writeStream.write('\n New Chunk \n');
// writeStream.write(chunk);
// });

//using piping to write a chunk of data 
readStream.pipe(writeStream);