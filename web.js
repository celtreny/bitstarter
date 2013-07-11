var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content;
    var fs = require('fs'); 
    fs.readFileSync('index.html',function read(err, content){
	if (err) throw err;
	console.log(content);
	});
    response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
