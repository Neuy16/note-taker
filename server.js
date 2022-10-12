// Sets up express
const express = require('express');
const app = express()
const port = process.env.port || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Required routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(port, err => {
    if(err) {
        return console.log('ERROR', err);
    }
    console.log(`Listening on port ${port}`);
});