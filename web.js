var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content;
    var fs = require('fs'); 
    fs.readFileSync('./index.html','utf8',function read(err, data) {
	if (err) {
	    throw err;
	}
	content = buffer.toString('utf8');
	console.log(content);
	});
	response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
