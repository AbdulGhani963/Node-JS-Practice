const http = require("http");

// Function to simulate a long-running task asynchronously
const simulateLongTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 500; j++) {
           console.log(`${i} ${j}`);
        }
      }
      resolve();
    }, 0); // Simulating an asynchronous task with setTimeout
  });
};

const server = http.createServer(async (req, resp) => {
  if (req.url === "/") {
    resp.end("Welcome Home Page");
  } else if (req.url === "/about") {
    try {
      // Perform the long-running task asynchronously
      await simulateLongTask();
      resp.end("About Page");
    } catch (err) {
      resp.statusCode = 500;
      resp.write("Internal Server Error");
    }
  } else {
    resp.end("Page not found");
  }
});

server.listen(8000, () => {
  console.log("Server listening on port : 5000....");
});
