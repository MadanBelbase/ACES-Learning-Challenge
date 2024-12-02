// Core module
// const http = require('http');

// External module
const express = require('express');

// Initialize app (must happen before it's used)
const app = express();
app.use((req , res, next) => {
 console.log('Middleware 1 executed', req.url,req.method);
 next();
})
app.use((req , res, next) => {
 console.log('Middleware  2 executed', req.url,req.method);
 res.send("Day 11 of ACES Learning challenge (Node.js) ")
})
app.use((req , res, next) => {
 console.log('Middleware  3 executed', req.url,req.method);
})

// Local module
const userRequestHandler = require('./user'); // Ensure './user' exists and exports a valid function

// Create server after initializing app
// const server = http.createServer(app);

// Start the server
const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
