var express = require('express');
var app = express();
var bodyParser= require("body-parser");
var mongoose = require('mongoose');
// connect to our database
mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/RailWays?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

const passenger = require('./server/Router/passengerRouter')
const admin = require('./server/Router/adminRouter')
const booking = require('./server/Router/bookingRouter')
const payment = require('./server/Router/paymentRouter')

app.use(passenger);
app.use(admin); 
app.use(booking);
app.use(payment);

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
var port = process.env.PORT || 8080; 
app.listen(port);
console.log('Server Listening on port ' + port);