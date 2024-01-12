const http = require("http");

const server = http.createServer((req, resp) => {
   if (req.url === "/") {
    resp.end("Welcome Home Page");
  } else if (req.url === "/about") {
    // Blocking Code
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 500; j++) {
        console.log(`${i} ${j}`);
      }
    }
    resp.end("About Page");
  } else {
    resp.end("Page not found");
  }
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
