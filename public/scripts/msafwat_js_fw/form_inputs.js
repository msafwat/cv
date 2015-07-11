function get_text_value_by_id(id){
	return $('#' + id).val(); 
}

function set_text_value_by_id(id, value){
	return $('#' + id).val(value); 
}

function create_email_input(name, is_required, pattern){
	var input = document.createElement("input");
	input.type = "email";
	input.id = "id_" + name; 
	input.name = name;
	if(is_required)
		input.required = "required";
	if(pattern)
		input.pattern = pattern;
	return input;
}

function create_submit(name){
	var input = document.createElement("input");
	input.type = "submit";
	input.id = "id_" + name; 
	input.name = name;
	input.value = "submit";
	return input;
}

function append_child(id, element){
	document.getElementById(id).appendChild(element); 
}

function decode_form_uri_without_special_chars(){
	var str;
	str = $("form").serialize();
	str = decodeURIComponent(str);
	return str;
}

function decode_form_uri(){
	var str;
	str = $("form").serialize();
	str = decodeURI(str);
	return str;
}

function add_class(id, new_class){
	$('#'+id).addClass(new_class);
}

function remove_class(id, old_class){
	$('#'+id).removeClass(old_class);
}

function replace_class(id, old_class, new_class){
	removeClass(id, old_class);
	add_class(id, new_class);
}

function is_checked(id){
	return document.getElementById(id).checked;
}





//<input type="range" min="18" max="90" step="value" value="37" required />



// function loader(){
// 	this.status = "ready";
// 	this.temp = 50;
// 	this.update_status = function(new_status){
// 		status = new_status;
// 	};
// }

// var loader = new loader();

// $(function(){
// 	$("#load_temp").click(function(eventData){
// 		loader.temp = load_temp();
// 		loader.update_status("done");
// 	});
// });



// function Employee() {}
// Employee.prototype.PayEmployee = function ( ){
// alert('Hi there!');
// }

// function Consultant () {
// Employee.call(this);
// }

// Consultant.prototype.PayEmployee = function ()
// {
// alert('Pay Consultant');
// }



//<nav> </nav>
// <article>
//<aside>
//<footer>
//<section>
//<hgroup> </hgroup>



//localStorage.destination


// <figure>
// 	<img src="details.png" />
// 	<figcaption>
// 		Image Description
// 	</figcaption>
// </figure>





// <canvas id="mycanvas" width="300" height="300"></canvas>

// var canvas = document.getElementById('mycanvas');
// var context = canvas.getContext('2d');
// var context.fillStyle = "rgb(255,0,0)";
// var context.fillRec(50,100,100,100); 





// document.getElementById("logo") .style.position = "relative";
// document.getElementByld("logo").Style.top = "5px";



//document.getElementById("validate").style.display = "inline";





// <!DOCTYPE html>
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
// <title></title>
// <script src="Scripts/jquery-1.8.2.js"></script>
// <script src="default.js"></script>
// </head>
// <body>
// <input type="text" id="message" value="Enter message here" /><br />
// <button id="btnSend" type="button">Send Message</button><br />
// <div id="result"></div>
// </body>
// </html>

// /// <reference path="Scripts/jquery-1.8.2.js" />
// var worker = new Worker('myWork.js');
// worker.onmessage = function (e) {
// $('#result').append(e.data + '<br />');
// }
// worker.onerror = function (e) {
// $('#result').append('Error: ' + e.data + '<br />');
// }
// $('document').ready(function () {
// $('#btnSend').on('click', function () {
// worker.postMessage($('#message').val());
// });
// });


// self.onmessage = function (e) {
// for (c in e.data) {
// postMessage(e.data[c].toUpperCase());
// }
// }



// self.addEventListener('message', function(event));
// var data = event.data;
// switch(data.cmd){
// 	case 'start':
// 		self.postMessage('Worker:'+data);
// 		break;
// 	case 'stop':
// 		self.close();
// 		break;
// 	default:
// 		self.postMessage('Try again: ' + data.msg);

// }



// try{
// 	doWork();
// } catch(e){
// 	if(e.number == -2146823281)
// }



//button.attachEvent('onclick', About);



//if (length = = 75)\
//if (length = = "75")



// var that = this;
// $.get('data.xml', function(data){
// 	that.parseAddress(data);
// });

//onblur, onfocus, onreset, onselect



// throw new Error(200, 'Invalid')

//text-shadow:


// $(document).ready(function(){
// 	$('table td: nth-child(2) input').focus(function(){
// 		$(this).parent().next().css("background-color", "#00FF00");
// 	});
// 	$('table td: nth-child(2) input').blur(function(){
// 		$(this).parent().next().css("background-color", "#FFFFFF");
// 	});
// });



// user important style sheets
// author important style sheets
// author normal style sheets
// user normal style sheets
// user agent style sheets



// h1{
//	position:absolute;
//	left:100%;
//	top:100%;
//}



// .Box{
// 	background: rgb(255,0,0);
// 	background: rgb(255,0,.5);
// }

// .Box{
// 	background: rgb(255,0,0);
// 	opacity: 0.5;
// }



// @media screen and (min-width:200px) and (max-width:480px)
// {
// 	#navbar{
// 		float: none;
// 		width:200px
// 	}
// }

// @media screen and (min-width:480px)
// {
// 	#navbar{
// 		float: left;
// 		width:500px
// 	}
// }



// h1 {text-transform:uppercase;}
// h2 {text-transform:capitalize;}
// p {text-transform:lowercase;}



// $("a img").each(function(){
// 	$(this).parent().attr('target', '_blank');
// });



// -ms-wrap-side: both;


//$(":header").css({color:'red'});


// div{
// 	border:3px solid;
// 	background:#b6aaaa;
// 	width:200px;
// 	height:100px;
// 	top:10%;
// 	left:10%;
// 	border-radius:25px 0px 25px 0px;
// }


// anchor selectors order
// A:link
// A:visited
// A:hover
// A:Active 



// box-flex



//<input id="txtValue" type="number" />
//<input id="txtValue" type="text" pattern=" [A-Za-z] {3}" />
//<input id="txtValue" type="text" />




//var xhr = new XMLHttpRequest();
//xhr.onreadystatechange = xhrHandler;



// var request = $.ajax({
// 	uri: '/',
// 	accepts: 'application/bint,text/xml',
// 	dataFilter: function(data, type){
// 		if(request.getResponseHeader("Content-Type" == "application/bint"))
// 			return parseBint(data);
// 		else
// 			return parseXml(data);
// 	},
// 	success: function(data){
// 		start(data);
// 	}
// });


// var stockRate;
// function getResults(){
// 	$.ajax({
// 		async: false,
// 		cache:false,
// 		type:'POST',
// 		url:"StockRates.asmx/GetRate",
// 		data:{'StockName': stockName},
// 		dataType:'json',
// 		success:function(result){
// 			stockRate=result;
// 		}
// 	});
// 	showRate();
// }



// throw new Error(200, "Invalid")


//var button = document.getElementByld('About');
//button.addEventListener('click', function(){alert('ddd')});



// function GetObjectType(obj){
// 	switch(obj.constructor){
// 		case Number:
// 			return 'Number';
// 			break;
// 		case String:
// 			return 'String';
// 			break;
// 		default:
// 			return 'Unknown';
// 	}
// }



// function Car(){
// 	Car.prototype.fourDoor = function(){
// 		alert('four doors');
// 	}
// }

// sedan.prototype.fourDoor = function()
// {
// 	alert('door count')
// }

// function sedan()
// {
// 	Car.call(this);
// }
// sedan.prototype = new Car();
// sedan.prototype.constructor = sedan;



// <body>
// 	<input id="btnSubmit" type="button" value="submit" onclick="disable(this)" />
// 	<script>
// 		function disable(ctrl){
// 			ctrl.disabled = true;
// 		}
// 	</script>
// </body>



// SVG



// var canvas = document.getElementByld('mycanvas');
// var context = canvas.getContext('2d');
// context.fillStyle="rgb(255,0,0)";
// context.fillRec(50,50,100,100);


//document.getEIementById("picture").style.position = "relative";
//document.getElementById("picture").style.top = "5px";



// <table>
// 	<tr>
// 		<th>Fruit</th>
// 		<th>Quantity</th>
// 		<th>Price</th>
// 	</tr>
// 	<tr>

// 	<tr>
// 		<td>Apple</td>
// 		<td>48</td>
// 		<td>$0.29</td>
// 	</tr>
// 	<tr>
// 		<td>Bananas</td>
// 		<td>72</td>
// 		<td>$0.19</td>
// 	</tr>
// 	<tr>
// 		<td>Watermelon</td>
// 		<td>14</td>
// 		<td>$3.99</td>
// 	</tr>
// </table>

// table{border: 1px solid black; font-family:Arial;}
// tr:nth-child(odd){background-color:red}
// tr td:nth-of-type(even){background-color:blue}



// var moveList = new Array();
// var myMoves = {};

// var server = new WebSocket('ws://gameserver.proseware.com/');
// server.onmessage = function(message){
// 	if(myMoves[message.data.id] == undefined)
// 		moveList.push(message.data);
// }

// server.onopen = function(){
// 	server.send(getUserName());
// }

// function SendMove(){
// 	var nextMove = getMove();
// 	myMoves[nextMove.id] = nextMove;
// 	server.send(nextMove);
// }



// <style type="text/css">
// 	#grid{
// 		display: -ms-grid;
// 		-ms-grid-columns: 100px 250px 100px 250px;
// 		-ms-grid-rows: auto;
// 	}
// </style>

//-ms-grid-columns: 2fr (3fr 2fr)[2];
//-ms-grid-rows: min-content;




// <script>
// 	$("div#container > ul").css("border", "1px solid black");
// </script>




// var canvas;
// var context;
// window.onload = function initialize (){
// 	canvas = document.getElementByld('clickCanvas');
// 	context = canvas.getContext('2d');
// 	//drawBox();
// 	drawBox.Click += clickReporter;
// }

// function clickReporter(e){
// 	alert('clicked');
// }

// function drawBox(){
// 	context.fillStyle = 'Black';
// 	context.strokeRect(20,20,canvas.width-20, canvas.height-20);
// }



// #dataTable tbody tr.selected:not(tr:last-child)




// function CustomError(code){
// 	this.errorCode=code;
// }

// var code = send();
// if(code != 0){
// 	throw new CustomError(code);
// }


//CustomError .prototype = Error.prototype;




// <ul>
// 	<li>HTML</li>
// 	<li>Javascript</li>
// 	<li>ASP.NET</li>
// 	<li>Python</li>
// </ul>
// var languages[];
// var items =document.getElementByTagName("li");
// for(var i = 0, l = items.length; i<l; i++)
// 	languages.push(items[i].innerHTML);
// languages.sort();
// for(var i = 0, l = items.length; i<l; i++)
// 	items[i].innerHTML= languages[i];




// <table>
// 	<tr>
// 		<th>Fruit</th>
// 		<th>Inventory</th>
// 	</tr>
// </table>
// var jsonFruit = { "apples" : "12", "bananas" : "8", "watermelon" : "3" }
// $.each(jsonFruit, function(key, value){
// 	$("<tr><td>" + key + "</td><td>" + value + "</td></tr>" ).appendTo("#fruitTable");
// });




// $(document).ready(function(){
// 	$('#submit').click(function(){
// 		$.getJSON({
// 			url:"url/GetImage",
// 			success: function(result){
// 				var personImage = new PersonImage(result);
// 				$("#happy").html(personImage.img);
// 			}
// 		});
// 	});
// });

// function PersonImage(image){
// 	var img = document.createElement('img');
// 	img.alt = image.Description;
// 	img.src = image.FileName;
// 	return img;
// }




// function ValidationException(number, message){
// 	this.message = message;
// 	this.name = "myLibrary Vlaidation Exception";
// 	this.number = number;
// }

// function LogicException(number, message){
// 	this.message = message;
// 	this.name = "myLibrary Logic Exception";
// 	this.number = number;
// }

// function myFunction(dayOfWeek){
// 	if(dayOfWeek>7){
// 		throw new ValidationException(123, "Day of Week must be less than 7");
// 	}
// }

// function doWork(value){
// 	try{
// 		myFunction(value);
// 	}
// 	catch(e){
// 		if (e instanceof ValidationException){
// 			handleValidationException(e.message);
// 		}
// 		else if (e instanceof LogicException){
// 			handleLogicException(e.message);
// 		}
// 		else{
// 			throw e;
// 		}
// 	}
// }



// function showLoanAmounts(){
// 	var loanAmount = 400;

// 	function showSomeLoanAmount(){
// 		var loanAmount = 800l

// 		function showAnotherLoanAmount(){
// 			var loanAmount = 1000;
// 			alert(loanAmount);
// 		}

// 		showAnotherLoanAmount();
// 		alert(loanAmount);
// 	}

// 	showAnotherLoanAmount();
// 	alert(loanAmount);
// }




// $(document).ready(function(){
// 	$("#submit").click(fnuction(){
// 		$.ajax({
// 			type: "POST",
// 			url: "Defualt.aspx/GetFullName",
// 			data: "{}",
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function(res){
// 				var fullname = res.data;
// 				$("#GivenName").text(fullname.GivenName);
// 				$("#Surname").text(fullname.Surname);
// 			}
// 		});
// 	});
// });



// <div ondrop="myApp.drop(this, event)" ondragenter="return false" ondragover="return false">
// 	<p>Fruit</p>
// </div>
// <p>
// 	<img src="apple.jpg" id="apple" alt="Apple" ondragstart="myApp.drag(this, event)" draggable="true">
// 	<img src="orange.jpg" id="orange" alt="Orrange" ondragstart="myApp.drag(this, event)" draggable="true">
// 	<img src="strawbarry.jpg" id="strawbarry" alt="Strawbarry" ondragstart="myApp.drag(this, event)" draggable="true">
// 	<img src="banana.jpg" id="banana" alt="bBanana" ondragstart="myApp.drag(this, event)" draggable="true">
// </p>


// var myApp={};
// (function(){
// 	this.drag = function(target,e){
// 		e.dataTransfer.setData('text', target.id);
// 	}

// 	this.drop = function(target, e){
// 		var id = e.dataTransfer.getData('text');
// 		target.appendChild(document.getElementByld(id));
// 		e.preventDefault();
// 	}
// }).apply(myApp);



// <bod>
// 	<form>
// 		<input type="button" value="submit" onclick="getText()" />
// 		<div id="result" />
// 	</form>

// 	<script>
// 		function getText(){
// 			var req = new XMLHttpRequest();
// 			req.onreadystatechange = function(){
// 				if(req.readyState == 4 && req.status == 200){
// 					document.getElementByld("result").innerHTML = req.responseText;
// 				}

// 				req.onopen("GET", "TextFile.txt", true);
// 				req.send();
// 			}
// 		}
// 	</script>
// </bod>




// <!DOCTYPE html>
// <html xmlns="https://www.w3.org/1999/xhtml">
// 	<body>
// 		<script>
// 			navigator.geolocation.watchPosition(locSucess, locFail);
// 			function locSucess (position){
// 				var spd = position.cooeds.speed;
// 			}
// 			function locFail(){

// 			}
// 		</script>
// 	</body>
// </html>




// <!DOCTYPE html>
// <html>
// 	<head>
// 		<style></style>
// 	</head>
// 	<body>
// 		<div id="top"></div>
// 		<div id="content">
// 			<div id="left"></div>
// 			<div id="main"></div>
// 			<div id="right"></div>
// 		</div>
// 		<div id="bottom"></div>
// 	</body>
// </html>

// #top{width:100%;height:200px;}
// #content{display:-ms-flexbox;-ms-flex-direction:row;width100%;}
// #content #left {width:200px;height:300px}
// #content #right {width:200px;height:300px}
// #content #main{-ms-flex:1;}
// #bottom{width:100%;height:200px}




// var message = '<soap:Envelope>...</soap:Envelope>';
// #.ajax(webServiceUri, {
// 	contentType: 'application/soap+xml',
// 	type: 'POST',
// 	dataType: 'xml',
// 	data: message
// });




// <style>
// 	p{
// 		text-shadow: blue 1px 1px 1px 2px;
// 		hyphens: auto;
// 	}
// </style>




// <style>
// 	.box{
// 		display:-ms-flexbox;
// 		-ms-flex-direction: row;
// 		-ms-flex-align:center;
// 		-ms-flex-pack:stretch;
// 		width:550px;
// 		height:400px;
// 	}
// </style>




// <!DOCTYPE html>
// <html>
// 	<head>
// 		<script></script>
// 	</head>
// 	<body onload="readXMLFile()">
// 		<div id="to"></div>
// 		<div id="from"></div>
// 		<div id="message"></div>
// 	</body>
// </html>





// <?xml version="1.0" encoding="utf-8"?>
// <messages>
// 	<to>JHartono@contoso.com</to>
// 	<from>JDow@contoso.com</from>
// 	<message>Meeting is cancelled</message>
// </messages>

// if(window.XMLHttpRequest){
// 	xmlhttp = new XMLHttpRequest();
// }
// else{
// 	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }

// xmlhttp.open("GET", "message.xml", false);

// xmlhttp.send();

// xmlDoc = xmlhttp.responseXML;




//Use a file type INPUT element, and then use the Web Storage API to upload the file.
//Register the file protocol by using protocol handler registration API and then upload the file by using XMLHttpRequest.

// <!DOCTYPE html>
// <html>
// <head>
// <title>Upload Files using XMLHttpRequest - Minimal</title>
// </head>
// <body>
// <form id="form1" enctype="multipart/form-data" method="post" action="Upload.aspx">
// <div class="row">
// <label for="fileToUpload">Select a File to Upload</label><br />
// <input type="file" name="fileToUpload" id="fileToUpload" onchange="fileSelected();"/>
// </div>
// <div id="fileName"></div>
// <div id="fileSize"></div>
// <div id="fileType"></div>
// <div class="row">
// <input type="button" onclick="uploadFile()" value="Upload" />
// </div>
// <div id="progressNumber"></div>
// </form>
// </body>
// </html>




// function checkConnection(){
// 	if(navigator.online){

// 	}
// 	else{

// 	}
// }



// $ (‘#btnEdit’).show();



// var customer = function(){
// 	var name = "Contoso";
// 	return{
// 		getName: function(){
// 			return name;
// 		}
// 		setName: function(newName){
// 			name = newName;
// 		}
// 	};
// }();
// alert(customer.name);



// function madeSelection(element, message){
// 	if(element === "Please Choose"){
// 		alert(message);
// 		element.focus();
// 		return false;
// 	} else {
// 		return true;
// 	}
// }



//readAsArrayBuffer()

//readAsBinaryString()
//readAsDataURL()
//readAsText()



//SEO


//tr:first-of-type, tr:last-of-type


//pattern="https://.+"




// <svg width="200px" height="200px">
// 	<g transform="translate(400,400)" id="myImage">
// 		<rect id="mySquare" x="-10" y="-10" width="20" height="20" color="blue" />
// 	</g>
// </svg>
// <input id="speed" type="text" value="10" />
// <button id="zoom" onclick="startAnimation();">Start</button>

// <script>
// 	var squareShape;
// 	var myTimer;

// 	function startAnimation(){
// 		squareShape=document.mySquare;
// 		squareShape.currentTheta=0;
// 		myTimer=myTimer.interval(speed.value);
// 		animateImage();
// 	}

// 	function animateImage(){
// 		squareShape.setAttribute("transform", "angle(" +
// 			squareShape.currentTheta + ")");
// 		squareShape.CurrentTheta += 0.1;
// 	}
// </script>



//$("input:first").val()




// var myWorker = new Worker('task.js');
// myWorker.postMessage({
// 	message: 'go',
// 	iterations: 1000000000
// });

// onmessage = function(event){
// 	if(event.data.message === 'go'){
// 		for(var i=0; i<=event.data.iterations;i+=1){
// 			var returnValue = i;
// 		}
// 		postMessage(returnValue);
// 	}
// };




// <!DOCTYPE html>
// <html>
// 	<style>
// 		.container{
// 			display: -ms-grid;
// 			-ms-grid-columns: 1fr 1fr 1fr;
// 			-ms-grid-rows: 1fr 1fr 1fr;
// 		}

// 		.blueBox{
// 			-ms-grid-row: 2;
// 			-ms-grid-column: 2;
// 			float: none;
// 			background-color:blue;
// 		}

// 		.text{
// 			-ms-grid-row: 1;
// 			-ms-grid-column: 1;
// 			-ms-grid-column-span: 3;
// 			-ms-grid-row-span: 3;
// 		}
// 	</style>
// 	<body>
// 		<div class="body">
// 			<div name="container" class="container">
// 			</div>
// 		</div>
// 	</body>
// </html>




// <video id="myVideon heigh"="320" width="400" src="myVideo.vtt" controls> </video>



// var canvas = document.getElementByld('myCanvas');
// context=canvas.getContext('2d');
// context.rotate(90);



// <label for="lanTypes">Loan Type</label>
// <select name="loanTypes" id="loanTypes" multiple="multiple">
// <option>Secured</option>
// <option selected="selected">Unsecured</option>
// <option>demand</option>
// <option selected="selected">Subsidized</option>
// </select>

// $("select option:selected").each(function(){
// 	selectedValues += $(loanTypes).text() + ',';
// });

// $("#loanTypes option:selected").each(function(){
// 	selectedValues += $(this).text() + ',';
// });



// var myApp = {};
// (function(){
// 	this.loanAmount = 100;

// 	this.display = function(value){
// 		document.getElementByld('display').innerHTML += value;
// 	};

// 	this.increaseLoanAmount = function(){
// 		this.loanAmount += 1000;
// 		return;
// 	};

// 	this.increaseLoanAmountAgain = function(){
// 		this.loanAmount += 1000;
// 		return;
// 	};
// }).apply(myApp);

// myApp.increaseLoanAmount();
// myApp.increaseLoanAmountAgain();

// myApp.display(myApp.loanAmount);




// <style>
// 	p{
// 		border:solid;
// 		box-sizing:border-box;
// 		border-raduis:10px;
// 	}
// </style>




// <script>
// 	function getStatus(url, callback){
// 		var httpRequest = new XMLHttpRequest();
// 		httpRequest.onreadystatechange = function(){
// 			if(httpRequest.readyState ===4 && httpRequest.status ===200){
// 				callback.call(httpRequest.responseXML);
// 			}
// 		};
// 		httpRequest.open('GET', url);
// 		httpRequest.send();
// 	}

// 	function start(url){
// 		getStatus(url, function(){
// 			processResults(this);
// 		})
// 	}
// </script>




// <input type="password" required autocomplete="off">



// function Stock(symbol){
// 	this.symbol = symbol;
// 	this.low = 0;
// 	this.hight = 0;
// }

// Stock.prototype.parseStock = function(data){
// 	this.low = data.low;
// 	this.high  = data.high;
// }

// stock.prototype.loadStock = function(){
// 	var stock = this;
// 	$.get('data.xml', function(data){
// 		stock.parseStock(data);
// 	});
// }





// <script>
// 	function add(v1, v2){
// 		return v1+v2+this.v3+this.v4;
// 	}

// 	function addValues(){
// 		var o = {v3:10,v4:14};
// 		var res = add.call(o,15,5);
// 		return res;
// 	}
// </script>



// ordersListing.dispatchEvent(new CustomeEvent("orderRecevived", {
// 	detail:{
// 		orderCount:5
// 	},
// 	bubles: false,
// 	cancelable: true
// }));

// ordersListing.addEventListener("orderRecevived", showOrdersReceivedCount);

// orderRecevived.dispatchEvent(ordersReceivedEvent);





// <svg hight="150" width="150" id="myGraphic">
// 	<circle cx="25" r="20" cy="20" fill="orange" id="myCircle" />
// </svg>
// <button id="zoom" onclick="zoomIn();">Zoom In</button>

// function zoomIn(){
// 	var myGraphic = document.getElementByld("myGraphic");
// 	myGraphic.setAttribute("cyrrentScale", 1.5);
// }




// $('input[name$="name"]'). css{{'background-color' : '#E0ECF8'});



// <div id="outer" style="column-width: 100px; ">. . .</div>




//("article:first-of-type") .css("background-color", "#f2f2f2");





// function square(side){
// 	this.side = side;
// 	this.area = calcArea;
// }

// function calcArea(){
// 	return this.side * this.side;
// }




// input: disabled{
// 	background-color: #e0e0e0;
// }

// <script>
// 	function enable(e){
// 		if(document.getElementByld){
// 			if(document.getElementByld('IT').cheked){
// 				document.getElementByld('eMail').disabled = false;
// 			} else{
// 				document.getElementByld('eMail').disabled = true;
// 			}
// 		}
// 	}
// </script>




// Rating (Between 1 and 10): <input type="number" name="rating" min="1" max="10"
// default="5">




// var xhr = new XMLHttpRequest();
// xhr.open('POST', '/Images/heroAccent.png', true);
// var img = document.createElement('img');
// xhr.reposeType = 'blob';
// xhr.onload = function(e){
// 	if(this.status==200){
// 		img.src=window.URL.createObjectURL(this.responseText);
// 	}
// }
// xhr.send();





// function validateFrom(){
// 	var loanTermInput = document.getElementByld("loanTermTextBox");
// 	var loanTerm = parseInt(loanTermInput.value, 10);
// 	if(isNaN(loanTerm) || loanTerm.toString() !== loanTermInput.value){
// 		alert("Loan Term must be an integer");
// 		return false;
// 	}
// 	return true;
// }

// var validateFrom = function(){
// 	var loanTermInput = document.getElementByld("loanTermTextBox");
// 	var loanTerm = parseInt(loanTermInput.value, 10);
// 	if(isNaN(loanTerm) || loanTerm.toString() !== loanTermInput.value){
// 		alert("Loan Term must be an integer");
// 		return false;
// 	}
// 	return true;
// }





// var contents = document.getElementByld("MapContents");
// var image = document.getElementByld("UseMap");
// image.addEventListener('mousemove', function(e){
// 	contents.innerHTML = "x: " + e.x + "</br/>y:" + e.y + "<br/>";
// });




// <script>
// 	#box1{
// 		margin: 5em; border: 1px solid #f00;
// 	}

// 	#box2{
// 		width:6em;
// 		height:4em;
// 		position:absolute;
// 		background-image: linear-gradient(to bottom, green, black);
// 		margin: 10px 10px 10px 10px;
// 	}
// </script>




// window.onerror = function(){

// }




// testObj.isPrototype(parentObj)




// $('#addBoxOfItems').click(function(event){
// 	for(var i = 0; i < itemsPerBox; i++){
// 		$('#addOneItem').trigger('click');
// 	}
// });




// <iframe sandbox src="frame1.htmln></iframe>


// JSON.stringify (formData);




// var myApplication = myApplication || {};
// myApplication.vehicle = function(displayControl, color, seatCount, tranType, wheelCount){
// 	this.color=color;
// 	this.NumberOfSeats=seatCount;
// 	this.TransmissionType=tranType,
// 	this.NumberOfWheels=wheelCount;
// 	this.showVehicle = document.getElementByld(displayControl);
// };

// myApplication.vehicle.prototype={
// 	Describe: function(){
// 		var valuesToDisplay = '';
// 		for(var property in this){
// 			if(typeof(this[property] === "string")){
// 				valuesToDisplay += "vehicle " + property + "is " + this[property] + '</br>';
// 			}
// 			else if(typeof(this[property])==="string"){
// 				if(this[property]<4){
// 					valuesToDisplay += 'Stay safe!';
// 				}
// 				else if(this[prototype]>=10){
// 					valuesToDisplay += "Big Machine";
// 				}
// 			}
// 			this.showVehicle.innerHTML = valuesToDisplay;
// 		}
// 	}
// };




// $(document).on("click", "#showDialog", function (e) {





// menuitem:hover{
// 	color:yellow;
// 	transition-property:color;
// 	transition-duration:5s;
// }




// @font-face{
// 	font-family: 'special';
// 	src= url(/Special.eot) format('embeded-opentype');
// 	src: url(/Special.tff) format('truetype');
// }
// body{
// 	font-family:'special', sans-serif;
// }






// div{
// 	background: yello !important;
// 	font: 12px/22px Arial !important;
// }





// navigator.geolocation.getCurrentPosition(hasPosition, noPosition);
// function hasPosition(position){
// 	theaters=findTheaters(position.coords.latitude, position.coords.longitude);
// 	...
// }
// function noPosition(){
// 	...
// }




// var ajax = $.ajax({
// 	url: data Uri
// });

// ajax.done = function (data){
// 	displayData(dataOperation);
// }





// div{
// 	transform:rotate(90deg);
// }





// var x = 0;
// function fun(){
// 	var x = 1;
// 	if(x){
// 		x=2;
// 	}
// }
// fun();
// alert(x);




// 181