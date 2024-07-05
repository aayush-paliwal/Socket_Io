import express from 'express';
import http from "http";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);
const io = new Server(server);


const _dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
    res.sendFile(join(_dirname, "index.html"))
})
console.log(_dirname);


// Here io is the entire socket server
io.on("connection", (client) => {
    console.log("User Connected to server ✅");

    // Here, client is the specific client that we are disconnecting from
    client.on("disconnect", () => {
        console.log("User Disconnected from server ❌")
    })

})


const PORT = 3000;
server.listen(PORT, (req, res) => {
    console.log("Server listening on port 3000")
})

// const url = require('node:url');
// const myURL1 = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// const myURL2 = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';
// console.log(myURL2.toString())
