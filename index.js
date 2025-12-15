const express = require('express');
const bodyparser = require('body-parser');
const mainRoutes = require('./routes/routes');

const server = express();

server.use(express.static('public'));
server.use(bodyparser.urlencoded({ extended: true }));
server.use('/', mainRoutes);

server.set('view engine', 'ejs');


server.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

server.listen(3000, (err) => {
    if (!err) {
        console.log(`Server is running on http://localhost:3000`);
    } else {
        console.log('Error starting server:', err);
    }
});