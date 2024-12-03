// Core module
// const http = require('http');

// External module
const express = require('express');

// Initialize app (must happen before it's used)
const app = express();

// Middleware 1: Logging the request details
app.use("/", (req, res, next) => {
    console.log('Middleware 1 executed', req.url, req.method);
    next();
});

// Middleware 2: Handles /submit-details route
app.use('/submit-details', (req, res, next) => {
    console.log('Middleware 2 executed', req.url, req.method);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ACES Learning Challenge</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                header {
                    background: #007BFF;
                    color: white;
                    padding: 10px 15px;
                    text-align: center;
                }
                section {
                    margin: 20px;
                    padding: 20px;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 0.9em;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Day 12 of ACES Learning Challenge</h1>
            </header>
            <section>
                <p>Hi, I am <strong>Madan Belbase</strong>, and I am learning about Node.js and Express.js middleware today.</p>
                <p><strong>Current Route:</strong> ${req.url}</p>
                <p><strong>HTTP Method:</strong> ${req.method}</p>
            </section>
            <footer>
                &copy; 2024 ACES Learning Challenge | Happy Coding!
            </footer>
        </body>
        </html>
    `);
});

// Middleware 3: Handles any other route
app.use((req, res, next) => {
    console.log('Middleware 3 executed', req.url, req.method);
    res.status(404).send("Sorry, the page you're looking for doesn't exist.");
});

// Local module
// Assuming './user' exports a valid function
// const userRequestHandler = require('./user'); 

// Create server after initializing app
// const server = http.createServer(app);

// Start the server
const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
