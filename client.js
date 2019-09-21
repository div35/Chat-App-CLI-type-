const socketclient = require("socket.io-client");
const socket = socketclient.connect("http://localhost:3000");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">"
})
var member;

rl.question("Whats your username : ", function (user) {
    member = user;
    var message = user + " has connected";
    socket.emit("event1", message); //to inform server that a user is connected   
});
socket.on("members", function (message) { // to tell other users that the user is connected and their messages
    console.log(message);
});

rl.on("line", function (chats) { //chating
    socket.emit("chat", member + " : " + chats);
});
socket.on("message", function (message) { // to tell other users that the user is connected and their messages
    console.log(message);
});
