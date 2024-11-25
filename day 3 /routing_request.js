const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // Logs request details for debugging

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Welcome</title>
        </head>
        <body>
          <h1>Welcome to the Home Page</h1>
          <p>This is the root URL of our Node.js server!</p>
          <a href="/about">About Us</a> | <a href="/contact">Contact Us</a>
        </body>
      </html>
    `);
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>About Us</title>
        </head>
        <body>
          <h1>About Us</h1>
          <p>I am passionate about building efficient servers with Node.js!</p>
          <a href="/">Home</a> | <a href="/contact">Contact Us</a>
        </body>
      </html>
    `);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Contact Us</title>
        </head>
        <body>
          <h1>Contact Us</h1>
          <p>You can reach us at: <strong>contact@example.com</strong></p>
          <a href="/">Home</a> | <a href="/about">About Us</a>
        </body>
      </html>
    `);
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>404 - Not Found</title>
        </head>
        <body>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <a href="/">Go Back Home</a>
        </body>
      </html>
    `);
  }
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
