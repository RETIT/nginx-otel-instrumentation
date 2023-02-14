const express = require("express");
const http = require("http");
const app = express();
app.get("/ServiceB", (req, res) => {
    console.log("request headers");
    console.log(JSON.stringify(req.headers));
    res.send("Hello from ServiceB");
});
app.listen(8080, () => {
console.log("Listening for requests");
});