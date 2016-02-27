var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/deploy'));

app.get('/', function(req, res) {
    res.sendfile('./deploy/index.html');
});

app.listen(8080);
console.log('servidor rodando');