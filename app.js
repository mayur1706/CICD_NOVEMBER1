import express from "express"
import http from "http"

const app = express();


app.get("/", (req, res) => {
    res.send("Hello from CI/CD!");
});

const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Server is running on port number 5000")
})