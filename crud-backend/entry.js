var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');



var app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://localhost:27017/shoppinglist');

//on connection
mongoose.connection.on('connected' , () => {
  console.log('mongodb conne at port 27017');
});

mongoose.connection.on('error' , (err) => {
  console.log(err);
});

const PORT = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

app.use('/api', route);

app.get('/',(req,res)=>{
  res.send('foo');
})

app.listen(PORT, () =>{
  console.log('Server has been started at port ' +PORT);

});
