const http = require('http');

const server = http.createServer((req, res) => {
//   console.log(req);
//   process.exit(); // stops event loop
console.log(req.url, req.method,req.headers)
res.setHeader('Content-Type', 'text/html');
res.write(`
  <html>
    <head>
      <title>Node is best</title>
    </head>
    <body>
    <h1>Day 3 of the ACES Learning Challenge: understanding request and response.</h1>
      <h2>Learning is part of life</h2>
      <p>Node.js helps in building efficient servers!</p>
    </body>
  </html>
`);
res.end();
});


const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});