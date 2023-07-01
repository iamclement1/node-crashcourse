const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   console.log(req.url);


   // set header content type
   res.setHeader('Content-Type', 'text/html');


   //send an html file
   fs.readFile('./views/index.html', (err, data) => {
      if (err) {
         console.log(err);
         res.end();
      }
      //res.write(data);
      res.end(data);
   });

   res.end();
});

//localhost: is the like the domain name on the web
//port number are like doors through which internet connections can be made
server.listen(3000, 'localhost', () => {
   console.log('listening on port 3000');
}); 