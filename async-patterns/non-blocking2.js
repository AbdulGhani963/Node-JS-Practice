const http = require("http");

const simulateLongTask = async () => {
  try {
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 500; j++) {
        console.log(`${i} ${j}`);
      }
    }
  } catch (err) {
    console.log("Internal error");
  }
};

const server = http.createServer(async (req, resp) => {
  if (req.url === "/") {
    resp.end("Welcome Home");
  } else if (req.url === "/about") {
    try {
      await simulateLongTask(); 
    } catch (err) {
      resp.statusCode = 500;
      resp.write("Internal Server Error");
    }
    resp.write("About page");
    resp.end();
  } else {
    resp.end("Cannot to find page");
  }
});

server.listen(5000);
