const http = require('http');
const os = require('os');
const port = 8080;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`You've hit the ${process.env.COLOR || 'default'} pod: ${os.hostname()}\n`);
}).listen(port);
