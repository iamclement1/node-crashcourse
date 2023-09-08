const express = require('express');

//setup express app,
const app = express();

//register view engine

app.set('view engine', 'ejs');
//listen for requests
app.listen(3000, () => {
   console.log("listening on port " + 3000);
})

app.get('/', (req, res) => {
   // res.send('<p>Home Page</p>');
   // res.sendFile('./views/index.html', { root: __dirname })
   const blogs = [
      {
         title: 'The golden fish',
         snippet: 'lorem ipsum dolor sit amet, consect'
      },
      {
         title: 'The boy and the lost girl',
         snippet: 'lorem ipsum dolor sit amet, con sect et'
      },
      {
         title: 'Th admonition',
         snippet: 'lorem ipsum dolor sit am eld ad '
      }
   ]
   res.render('index', { title: 'Home Page', blogs })
});

app.get('/about', (req, res) => {
   // res.send('<p>About Page</p>');
   // res.sendFile('./views/about.html', { root: __dirname })
   res.render('about', { title: 'About Page' });

});

//redirect
app.get('/blogs/create', (req, res) => {
   res.render('create', { title: 'Create Blog' });
});

//404 page
app.use((req, res) => {
   // res.status(404).sendFile('./views/404.html', { root: __dirname })
   res.status(404).render('404', { title: '404 Page' });
});