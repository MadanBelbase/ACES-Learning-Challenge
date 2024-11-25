const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request URL: ${req.url}, Method: ${req.method}`); // Logs request details

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Welcome</title>
        </head>
        <body>
          <h1>Welcome to Our Node.js Server</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
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
          <p>We are passionate about building efficient and scalable servers with Node.js!</p>
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
  } else if (req.url === '/blog') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Blog</title>
        </head>
        <body>
          <h1>Our Blog</h1>
          <p>Stay tuned for exciting articles and updates!</p>
          <a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact Us</a>
        </body>
      </html>
    `);
  } else if (req.url === '/project') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Projects</title>
        </head>
        <body>
          <h1>Our Projects</h1>
          <p>Check out our amazing projects that showcase the power of Node.js!</p>
          <a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact Us</a>
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
