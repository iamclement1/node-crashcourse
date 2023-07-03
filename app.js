const express = require('express');

//setup express app,
const app  = express();

//listen for requests
app.listen(3000, () => {
   console.log("listening on port " + 3000);
})

app.get('/', (req, res) => {
   // res.send('<p>Home Page</p>');
   res.sendFile('./views/index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
   // res.send('<p>Home Page</p>');
   res.sendFile('./views/about.html', {root: __dirname})
});

//redirect
app.get('/about-us', (req, res) => {
   res.redirect('/about'); 
});

//404 page
app.use((req, res) => {
   res.sendFile('./views/404.html', {root: __dirname})
});