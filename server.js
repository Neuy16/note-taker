// Sets up the express app
const express = require('express')
const app = express()

// Sets the port
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(3000)