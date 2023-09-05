setTimeout(() => {
   console.log('in timeout');
   clearInterval(int)
}, 3000);

const int = setInterval(() => {
   console.log('in the interval');
}, 1000);


// checking the dirctory name and filename

console.log(__dirname);
console.log(__filename);