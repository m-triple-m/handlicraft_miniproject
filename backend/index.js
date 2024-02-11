// import express
const express = require("express");
const UserRouter = require('./routers/userRouter');
const mongoose = require ('./connection')
const cors = require('cors');

// initialize express app
const app = express();

const port = 5000;

// middleware
app.use(cors(
  {origin: ['http://localhost:3000']}
));

app.use(express.json());

app.use('/user', UserRouter);

app.get("/", (req, res) => {
  res.send("Response from express");
});

app.get('/login', (req, res) => {
    res.send('Response from add route')
})

// getall
// update


app.get('*', (req, res) => {
    res.send('404 not found')
});

app.listen(port, () => {
  console.log("server started");
});
