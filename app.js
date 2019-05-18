var express = require('express');
var todoController = require('./controllers/todocontroller');

var app = express();

// set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);


//listen to port 
app.listen(3000);
console.log('You are listening at port 3000');