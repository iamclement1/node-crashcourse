const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


//setup express app,
const app = express();
//connect to mongodb
// const dbURI = process.env.NEXT_PUBLIC_MONGODB;

const dbURI = 'mongodb+srv://nodetuts:netnodetuts@cluster0.cktq4zv.mongodb.net/node-tut'

// const dbURI = process.env.NEXT_PUBLIC_MONGODB_URI;
// console.log(dbURI);

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      app.listen(3000, () => {
         console.log("listening on port " + 3000);
      })
      console.log('connected to DB')
   })
   .catch(err => console.log('error connecting to DB: ' + err.message));


//register view engine

app.set('view engine', 'ejs');
//listen for requests


app.use(morgan('dev'))

//mongoose and mongo sandbox rutes
//  

//middleware and static file
app.use(express.static("public"))
//this middleware is used for accepting form data
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
   // res.send('<p>Home Page</p>');
   // res.sendFile('./views/index.html', { root: __dirname })
   res.status(200).redirect('/blogs')
});

app.get('/about', (req, res) => {
   // res.send('<p>About Page</p>');
   // res.sendFile('./views/about.html', { root: __dirname })
   res.render('about', { title: 'About Page' });

});


//Blog routes

app.use('/blogs', blogRoutes)


//404 page
app.use((req, res) => {
   // res.status(404).sendFile('./views/404.html', { root: __dirname })
   res.status(404).render('404', { title: '404 Page' });
});


//route parameters are part of the routes that could change