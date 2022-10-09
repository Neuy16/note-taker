const path = require("path");
const express = require('express')
const app = express()

// Paths to the two main pages
app.get("*.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});


