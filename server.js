const http = require("http")
const server = http.createServer();
const socketio = require("socket.io");
const socketserver = socketio(server);
socketserver.listen(3000);

var obj = {};

socketserver.on("connect", function (socket) {
    //console.log(socket.id);
    socket.on("event1", function (message) {
        console.log(message);
        var name = message.split(":")[0];
        obj[name] = " " + socket.id;
        socket.broadcast.emit("members", message);
    });
    socket.on("chat", function (message) {
        console.log(message);
        socket.broadcast.emit("message", message);

    })
});

