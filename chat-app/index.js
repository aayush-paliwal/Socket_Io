import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log("User connected successfully ✅");

    socket.on("chat message", (msg) => {
        io.emit('chat message', msg);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected ❌");
    })
})

server.listen(3000, () => console.log('Listening on port: 3000'));