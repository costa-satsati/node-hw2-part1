var http = require('http');

// in milliseconds
const interval = process.argv[2];
const timeToResponse = process.argv[3];

if (!interval || !timeToResponse) {
  throw new Error('Please specify both interval and timeToResponse in milliseconds!');
}

const server = http.createServer(function (request, response) {
  response.writeHead(200,
    { 'Content-Type': 'text/html' });

  const refreshIntervalId = setInterval(() => console.log(new Date().toUTCString()), interval);

  setTimeout(() => {
    clearInterval(refreshIntervalId);
    response.end(`<html><body><h1>Current time: ${new Date().toUTCString()}</h1></body></html>`);
  }, timeToResponse);
});
server.listen(3000);
