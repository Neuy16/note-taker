// Sets up routing and express
const router = require('express').Router();
// Allows for manipulation of json file
const fs = require("fs");


// Gets note data from db
router.get("/api/notes", (req, res) => {
  fs.readFile("../db/db.json", (err, data) => { 
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});
// Posts new note data to db
router.post("/api/notes", (req, res) => {
    let allNotes = [];
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4(),
    }
    fs.readFile(__dirname + "../db/db.json", (err, data) => {
        if (err) throw err;
        allNotes = JSON.parse(data);
        allNotes.push(newNote);
        fs.writeFile(__dirname + "../db/db.json", JSON.stringify(allNotes), "utf-8", (err) => {
            if (err) throw err;
            console.log("The note has been saved.")
            res.end();
        })
    })
    console.log(newNote)
});

router.delete("/api/notes", (req, res) => {

});

module.exports = router;
