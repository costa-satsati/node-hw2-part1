var http = require('http')

// in milliseconds
const interval = process.argv[2];
const timeToLive = process.argv[3];




const server = http.createServer((function (request, response) {
	response.writeHead(200,
		{ "Content-Type": "text/plain" });

	response.end("Server listening on port 3000\n");
}));
server.listen(3000);

if (interval) {
	const refreshIntervalId = setInterval(() => console.log(new Date().toUTCString()), interval);
}

if (timeToLive) {
	setTimeout(() => {
		server.close(() => console.log(`Server closed on: ${new Date().toUTCString()}`));
		clearInterval(refreshIntervalId);
	}, timeToLive);
}