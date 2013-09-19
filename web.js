var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');                                                                                               
var infile = "index.html";

var file_contents = fs.readFileSync(infile,"utf-8");


app.get('/', function(request, response) {
  response.send(file_contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
