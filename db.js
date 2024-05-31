const mongoose = require('mongoose');

// Define the Mongoose connection URL
const mongoURL = 'mongodb://localhost:27017/restaurant';

// Set Up Mongoose Connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Database Connected Successfully');
});

db.on('error', (err) => {
    console.log('Error Connecting to Database:', err);
});

db.on('disconnected', () => {
    console.log('Database Disconnected');
});

// Export the database connection object
module.exports = db;
