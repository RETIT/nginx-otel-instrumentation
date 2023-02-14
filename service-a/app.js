const express = require("express");
const http = require("http");
const app = express();
app.get("/ServiceA", (request, response) => {
    console.log("request headers");
    console.log(JSON.stringify(request.headers));
const options = {
  hostname: "nginx",
  port: 80,
  path: "/ServiceB",
  method: "GET",
  headers: {
    'tracestate': request.header('tracestate'),
    'traceparent': request.header('traceparent')
  }
};
const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (d) => {
    response.send("Hello World!\nServiceB is saying:" + d);
  });
});
req.end();
});
app.listen(8080, () => {
console.log("Listening for requests");
});