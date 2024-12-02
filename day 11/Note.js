// External module
const express = require('express'); 
/*
The 'express' module is an external library that provides a robust set of features 
for building web and mobile applications. Here, we use it to create a web application framework.
*/

// Initialize app (must happen before it's used)
const app = express(); 
/*
The 'app' object represents the Express application. It is initialized by calling the 'express()' function. 
This object is used to define middleware, routes, and other configurations for the application.
*/

// Middleware 1
app.use((req, res, next) => {
    console.log('Middleware 1 executed', req.url, req.method);
    /*
    This middleware logs the URL and HTTP method of the incoming request.
    The 'next()' function is invoked to pass control to the next middleware in the stack.
    Without calling 'next()', the request-response cycle would stop at this middleware.
    */
    next(); // Passes control to the next middleware.
});

// Middleware 2
app.use((req, res, next) => {
    console.log('Middleware 2 executed', req.url, req.method);
    /*
    This middleware also logs the request details. However, instead of calling 'next()', 
    it sends a response back to the client using 'res.send()'. This terminates the 
    request-response cycle, meaning the next middleware ('Middleware 3') will not execute.
    */
    res.send("Day 11 of ACES Learning challenge (Node.js) "); // Sends a response and stops the chain.
});

// Middleware 3
app.use((req, res, next) => {
    console.log('Middleware 3 executed', req.url, req.method);
    /*
    This middleware will not execute because Middleware 2 has already sent a response to the client.
    Middleware defined after a response is sent won't be invoked unless explicitly handled.
    */
});

// Local module
const userRequestHandler = require('./user'); 
/*
This imports a local module from the './user' file. 
The './user' module must exist and export a valid function or object to be used here. 
For example, it could define route handlers or specific logic for the application.
*/

// Start the server
const port = 3003; 
/*
Defines the port number where the application will listen for incoming requests.
Using port 3003 in this case. Ensure this port is not already in use by another application.
*/

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    /*
    The 'app.listen()' method starts the Express application and binds it to the specified port.
    Once the server is running, a message is logged to the console.
    */
});

/*
Why `http` Module is Not Used:
- Express automatically handles the creation of an HTTP server when `app.listen()` is called.
- The `http` module is not explicitly required unless there's a need to customize the server behavior.
*/
