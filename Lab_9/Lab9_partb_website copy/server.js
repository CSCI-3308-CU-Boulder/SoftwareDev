// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier

const ops = [
  {
      id: 1,
      name: "Add",
      sign : "+",
  },
  {
      id: 2,
      name: "Subtract",
      sign : "-",
  },
  {
      id: 3,
      name: "Multiply",
      sign : "*",
  }
];


app.post("/add", (request, response) => {
  const {num1, num2} = request.body;

  if (typeof(num1)!="number" ||  typeof(num2)!="number"){
    response.status(404).send("Invalid format");
    return;
 }

 const add = (num1, num2) => {
   return num1 + num2;
   }

  response.status(201).send({
   result: add(num1, num2)
  });


});


app.post("/divide", (req, res) => {

  const {num1, num2} = req.body;

  if(typeof(num1)!="number" || typeof(num2)!="number" || num2 == 0){
    res.status(404).send("Invalid format");
    return;
  }

  const div = (num1, num2) => {
    return (num1 / num2);
  }

  res.status(201).send({
    result: div(num1, num2)
  });


});

module.exports = app.listen(3000);
console.log('3000 is the magic port');