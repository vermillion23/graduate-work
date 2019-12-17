var http = require('http');
var url = require('url');

var server = new http.Server(function (req, res) {
    console.log(req.method, req.url);

    var urlParsed = url.parse(req.url);

    console.log(urlParsed);
});

//var counter = 0;

//var emit = server.emit;
//server.emit = function (event) {
//    console.log(event);
//    emit.apply(server, arguments); 
    // arguments в данном случае просто заглушка?
//};

server.listen(1339, '127.0.0.1');