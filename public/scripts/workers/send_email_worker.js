self.onmessage = function (e) {
	//for (c in e.data) {
	// 	postMessage(e.data[c].toUpperCase());
	//}

	try{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					postMessage('Email Sent!');
				}
				else {
					postMessage('Email Not Sent!');
				}
			}
		}
		xhr.open("POST", e.data.url,  true);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(JSON.stringify(e.data));
	}
	catch(err){
		postMessage(err.message);
	}
}