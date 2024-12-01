const http = require('http');
const testingSynatx = require('./synatx');
const runtime = require('./Runtime');
const logical = require('./logical');
const userRequestHandler = require('./user')


const server = http.createServer(userRequestHandler);
// const server = http.createServer((req, res) => {

//     console.log(req.url,req.method);
//     // testingSynatx();
//     // runtime();
//     logical();
   
// });

const port = 2000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });