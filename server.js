const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server).sockets;
const url = require("url")
app.get('/*',(req,res)=>{
let link = url.parse(req.url, true);
console.log(link);
let path = link.path;
if(path === '/') { 
    res.sendFile(__dirname + '/index.html');
} else {
    res.sendFile(__dirname + path);
}
})



io.on("connection",socket=>{
console.log("connected");

socket.on('sendbn',function(sendbutNum){
console.log(butNum);

})


socket.on("disconnet",()=>{
console.log("disconnected");
});

})



const port = 8080;
server.listen(port,()=>console.log('Server Runing on port 8080'));





