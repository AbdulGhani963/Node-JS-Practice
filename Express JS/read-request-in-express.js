const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    console.log('Data send by browser ',req.query.name)
    resp.send("Welcome, this is home page "+ req.query.name);
})

app.get('/about', (req, resp) => {
    resp.send("Welcome, this is about page");
})

app.get('/help', (req, resp) => {
    resp.send("Welcome, this is help page");
})

app.listen(5000, () => {
    console.log("Server port 5000 listening....");
})