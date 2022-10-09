// Sets up express
const express = require("express");
// Sets up routing
const router = express.Router();
// Allows for manipulation of json file
const fs = require('fs')

// require('../db/db.json')

router
  .route("/api/notes")
  .get((req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        let note = JSON.parse(data);
        console.log(note);
    });
    
  })
  .post((req, res) => {

  })
  .delete((req, res) => {

  });

module.exports = router;
