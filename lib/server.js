var http = require('http');

function start_server(domain, port, request_handler){
	http.createServer(request_handler).listen(port, domain);
	console.log('Server running at http://' + domain + ':' + port + '/');
}

module.exports.start_server = start_server;