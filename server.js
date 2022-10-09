// Sets up express
const express = require('express');
const app = express()
const port = process.env.port || 3001;

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