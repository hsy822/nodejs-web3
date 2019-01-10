var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');

app.use('/lib', express.static(__dirname + "/lib"));

var server = http.createServer(app).listen(3303, function() { console.log('Server 3303 port serverunning..')});

app.get('/', function(req, res) {
   fs.readFile('fablab_coin.html', function(error, data) {
      res.writeHead(200, { 'Content-Type':'text/html'});
      res.end(data);
      });

 });
