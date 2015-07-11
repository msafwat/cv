function post_ajax(url, data, on_success, on_error, username = null, password = null){
	var pars = {
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: url,
		data: data,
		dataType: "json",
		success: on_success,
		error: on_error,

		// dataFilter: function(data, type){
		// 	if(request.getResponseHeader("Content-Type") == "application/bint")
		// 		return parse_bint(data);
		// 	else
		// 		return parse_xml(data);
		// }
	};

	if(username && password){
		pars.username = username;
		pars.password = password;
	}

	$.ajax(pars);
}





//var xhr = new XMLHttpRequest()

//xhr.upload.onprogress = function(evt)
//{
//    if (evt.lengthComputable)
//    {
//        var percentComplete = parseInt((evt.loaded / evt.total) * 100);
//        console.log("Upload: " + percentComplete + "% complete")
//    }
//};

//xhr.onreadystatechange = function(event) {
//    if (event.target.readyState == 4) {
//        updateFileList();
//    }
//};

//xhr.open("POST", "_code/upload.php");
//xhr.setRequestHeader("Cache-Control", "no-cache");
//xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//xhr.setRequestHeader("X-File-Size", file.size);
//xhr.setRequestHeader("X-File-Type", file.type);
//xhr.setRequestHeader("Content-Type", "multipart/form-data");
//xhr(file);





//example2
//<!DOCTYPE html>

//<html>
//<body>
//    <input type="file" id="fileInput"/>
//    <button onclick="startUpload();">Upload</button>
//    <br/>
//    <progress id="progressBar" max="100" value="0"/>

//</body>
//</html>

// <script>
// function startUpload() {
//     var fileInput = document.getElementById("fileInput");

//     if (fileInput.files.length == 0) {
//         alert("Please choose a file");
//         return;
//     }
    
//     var progressBar = document.getElementById("progressBar");
//     var xhr = new XMLHttpRequest();

//     xhr.upload.onprogress = function(e) {
//         var percentComplete = (e.loaded / e.total) * 100;
//         progressBar.value = percentComplete;
//     };

//     xhr.onload = function() {
//         if (xhr.status == 200) {
//             alert("Sucess! Upload completed");
//         } else {
//             alert("Error! Upload failed");
//         }
//     };
//     xhr.onerror = function() {
//         alert("Error! Upload failed. Can not connect to server.");
//     };
    
//     progressBar.value = 0;
//     xhr.open("POST", "ajax-upload", true);
//     xhr.setRequestHeader("Content-Type", fileInput.files[0].type);
//     xhr.send(fileInput.files[0]);
// }
// </script>