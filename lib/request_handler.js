var url = require('url');

function request_handler (request, response) {
	var url_parts = url.parse(request.url, true);

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello ' + url_parts.query.name + '!\n');
} 

module.exports = {
	request_handler: request_handler
}