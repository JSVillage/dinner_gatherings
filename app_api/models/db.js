var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Herder';
mongoose.connect(dbURI);

var dbURIlog = 'mongodb://localhost/HerderLog';
var logDB = mongoose.createConnection(dbURIlog);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

logDB.on('connection', function() {
  console.log('Mongoose connected to ' + dbUIRlog);
});

logDB.close(function() {
  console.log('Mongoose log disconnected');
});

var readline = require("readline");
if (process.platform === "win32"){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("SIGINT", function(){
    process.emit("SIGINT");
  });
}

var gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function (){
    process.exit(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function() {
  gracefulShutdown('app termination', function (){
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function (){
    process.exit(0);
  });
});

require('./events');
