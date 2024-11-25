const http = require('http');
const userRequestHandler = require('./user'); // Import the request handler from 'chunk.js'

// Pass the userRequestHandler as the request listener
const server = http.createServer(userRequestHandler);

const PORT = 3001; // Define the port
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

