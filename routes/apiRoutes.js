// Sets up routing and express
const router = require('express').Router();
// Allows for manipulation of json file
const fs = require("fs");

const uuid = require("uuid");


// Gets note data from db
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => { 
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});
// Posts new note data to db
router.post("/notes", (req, res) => {
    let allNotes = [];
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4(),
    }
    fs.readFile(__dirname + "./db/db.json", (err, data) => {
        if (err) throw err;
        allNotes = JSON.parse(data);
        allNotes.push(newNote);
        fs.writeFile(__dirname + "./db/db.json", JSON.stringify(allNotes), "utf-8", (err) => {
            if (err) throw err;
            console.log("The note has been saved.")
            res.end();
        })
    })
    console.log(newNote)
});

    router.delete("/notes/:id", (req, res) => {
        let noteId = req.params.id;
        fs.readFile(__dirname + "./db/db.json", (err, data) => {
            if (err) throw err;
            let notesDB = JSON.parse(data);
            const filteredNotes = notesDB.filter(values => values.id != noteId);
            fs.writeFile(__dirname + "./db/db.json", JSON.stringify(filteredNotes), "utf-8", err => {
                if (err) throw err;
                console.log("The note has been deleted.")
                res.end();
            });
        });
    });


module.exports = router;
