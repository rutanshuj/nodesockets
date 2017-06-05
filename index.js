var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.sendFile(_dirname+'/index.html');
// })
io.on('connection', function (socket) {
    console.log("one user connected" + socket.id);
})
http.listen(8090, function () {
    console.log('server listening on port 8090');
})
