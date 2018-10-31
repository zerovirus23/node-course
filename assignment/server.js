// Importing core modules
const http = require('http');

// Importing custom modules
const routes = require('./routes');

//Server entry point 
const server = http.createServer(routes);

server.listen(3000);