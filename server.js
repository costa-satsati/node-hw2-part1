var http = require('http');

// in milliseconds
const interval = process.argv[2];
const timeToResponse = process.argv[3];

if (!interval || !timeToResponse) {
  throw new Error('Please specify both interval and timeToResponse in milliseconds!');
}

const server = http.createServer(function (request, response) {
  response.writeHead(200,
    { 'Content-Type': 'text/plain' });

  const refreshIntervalId = setInterval(() => console.log(new Date().toUTCString()), interval);

  setTimeout(() => {
    clearInterval(refreshIntervalId);
    response.end(`Current time: ${new Date().toUTCString()}`);
  }, timeToResponse);
});
server.listen(3000);
