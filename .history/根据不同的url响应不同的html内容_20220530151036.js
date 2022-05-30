const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const url = req.url;
  const content = "<h1>404 is not found</h1>";
  http.setHeader("Content-Type", "text/html ;charset=utf-8");
  if (url == "/" || url == "/index.html") {
    res.end("<h1>首页</h1>");
  } else if (url == "/about.html") {
    res.end("<h1>关于</h1>");
  }
});
server.listen(8080, () => {
  console.log("server running at https://127.0.0.1:8080");
});
