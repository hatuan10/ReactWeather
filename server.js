var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3003, function(){
	console.log('Express server listen on port 3003');
});