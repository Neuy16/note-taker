const path = require("path");
const router = require('express').Router();


// Paths to the two main pages
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});


module.exports = router;