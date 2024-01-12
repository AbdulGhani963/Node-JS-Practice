const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.send(`<h1>Welcome Home Page</h1> <a href='/about'>Go to about page</a>`);
});

app.get("/about", (req, resp) => {
  resp.send(`<input type='text' placeholder='User name' />
      <button>Click Me</button> <br>
      <a href='/'>Back to Home page</a>
    `);
});

app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "Troy",
      email: "troy@gmail.com",
    },
    {
      name: "David",
      email: "david@gmail.com",
    },
    {
      name: "Saad",
      email: "saad@gmail.com",
    },
  ]);
});

app.listen(5000, () => {
  console.log("Server port 5000 listening....");
});
