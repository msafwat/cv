//var path = require('path');
//var fs = require('fs');
//var lib = path.join(path.dirname(fs.realpathSync(__filename)), './lib');

//var server = require(lib + '/server.js');
//var request_handler = require(lib + '/request_handler.js');

//server.start_server('localhost', 8090, request_handler.request_handler);


var express = require('express');
var formidable = require('formidable');
var email = require('mailer');

var app = express();
app.use(express.static(__dirname + '/public'));
app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});
app.get('/', function (request, response) {
	response.redirect('msafwat.html');
});
app.get('/send_email_get', function (request, response) {
	response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ 
    	username: request.query.username, 
    	email: request.query.email, 
    	subject: request.query.subject, 
    	body: request.query.body }));
    
});
app.post('/send_email', function (request, response) {
	if (request.method.toLowerCase() == 'post') {
		var d = request.body;

			email.send({
			    host : "smtp.gmail.com",
			    port : "465",
			    ssl : true,
			    //domain : "i-visionblog.com",
			    to : "mostafa.safwat.1@gmail.com",
			    from : "mostafa.safwat.1@gmail.com",
			    subject : "Moustafa Safwat - Senior Software Developer - CV",
			    text: "Username: " + d.username + "\nEmail: " + d.email + "\nSubject: " + d.subject + "\nMessage: " + d.body + "\nTitle: " + d.title,
			    html: "<span>Username: " + d.username + "</span><br/><span>Email: " + d.email + "</span><br/><span>Subject: " + d.subject + "</span><br/><span>Message: " + d.body + "</span><br/><span>Title: " + d.title + "</span>",
			    authentication : "login",        // auth login is supported; anything else $
			    username : 'mostafa.safwat.1@gmail.com',
			    password : ''
			    },
			    function(err, result){
			      if(err){ 
			      	response.send("error occured"); }
			      else { 
			      	response.send("Email Sent");}
				});
	// 	});
	}
});
app.listen(8080);