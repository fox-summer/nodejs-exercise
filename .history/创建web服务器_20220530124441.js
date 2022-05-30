const http = require("http");
const server = http.createServer();
server.on("request", () => {
  console.log("connect");
});
server.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
});
