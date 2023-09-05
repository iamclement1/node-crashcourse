
const greet = (name) => {
   console.log(`hello ${name}`);
}
greet("clement");
greet("Winnie");

//global object
setTimeout(() => {
   console.log("first object");
}, 3000);

const int = setInterval(() => {
   console.log("in the interval");
}, 1000);