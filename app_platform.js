var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

app.use(multer({ storage: storage }).single('file'));

app.post('/up', (req, res) => {
  console.log(req.file);

});

app.get('/download/:id', function(req, res){
  var fileName = __dirname + '/uploads/' + req.params.id;
  res.download(fileName)
})

app.use('/lib', express.static(__dirname + "/lib"));

var server = http.createServer(app).listen(3304, function() { console.log('Server 3304 port serverunning..')});

app.get('/', function(req, res) {
   fs.readFile('fablab_platform.html', function(error, data) {
      res.writeHead(200, { 'Content-Type':'text/html'});
      res.end(data);
   });
});
