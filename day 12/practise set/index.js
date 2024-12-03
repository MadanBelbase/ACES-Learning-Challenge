// External module
const express = require('express');

// Initialize app
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware 1: Logs request details
app.use("/", (req, res, next) => {
    console.log('Middleware 1 executed', req.url, req.method);
    next();
});

// Middleware 2: Logs details
app.use((req, res, next) => {
    console.log('Middleware 2 executed', req.path, req.method);
    next();
});

// Root Route ("/"): Displays a response
app.get("/", (req, res, next) => {
    console.log('Middleware 3 executed', req.path, req.method);
    res.send("<h1>Middleware 3 Response</h1>");
});

// Contact Us Page
app.get("/contact-us", (req, res) => {
    console.log('Contact Us Page requested', req.path, req.method);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Us</title>
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
                    padding: 15px;
                    text-align: center;
                }
                main {
                    margin: 20px auto;
                    max-width: 600px;
                    padding: 20px;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                input, textarea, button {
                    margin-bottom: 15px;
                    padding: 10px;
                    font-size: 1em;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                button {
                    background: #007BFF;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Contact Us</h1>
            </header>
            <main>
                <p>If you have any questions, please fill out the form below:</p>
                <form action="/submit-contact" method="POST">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </main>
        </body>
        </html>
    `);
});

// POST Handler for Form Submission
app.post("/submit-contact", (req, res) => {
    console.log('Form submitted:', req.body);

    const { name, email, message } = req.body;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Submission Successful</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #e8f5e9;
                    color: #333;
                }
                header {
                    background: #28a745;
                    color: white;
                    padding: 15px;
                    text-align: center;
                }
                main {
                    margin: 20px auto;
                    max-width: 600px;
                    padding: 20px;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Submission Successful</h1>
            </header>
            <main>
                <p>Thank you, <strong>${name}</strong>, for reaching out!</p>
                <p>Your email: <strong>${email}</strong></p>
                <p>Your message: <strong>${message}</strong></p>
            </main>
        </body>
        </html>
    `);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

