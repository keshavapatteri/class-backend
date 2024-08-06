require('dotenv').config();
const express = require('express');
const app = express(); // Remove 'new' keyword

require('./db');
const morgan = require('morgan');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 4528;


app.use(morgan('dev'));

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*' // Corrected typo
}));

app.use('/', routes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});

