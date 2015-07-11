var worker = new Worker('../../scripts/workers/send_email_worker.js');
worker.onmessage = function (e) {
	current_progress = 91;
}
worker.onerror = function (e) {
	alert('Error:' + e.data);
}

var is_valid = true;
var current_progress = 0;
var progess_interval = null;

function validate_form(id, form_group, form_alert, condition){
  	var _val = $('#'+id).val();
  	if(condition){
    	add_class(form_group, 'has-error');
    	add_class(form_group, 'has-feedback');
    	$("#id_div_alert").show();
    	$("#"+form_alert).show();
    	$('#id_btn_cancel').trigger('click');
    	is_valid = false;
  	} else{
    	remove_class(form_group, 'has-error');
    	remove_class(form_group, 'has-feedback');
    	$("#"+form_alert).hide();
  	}
}

function sbmt_confirm(){
  	is_valid = true;
  	$("#id_div_alert").hide();

  	var email_val = $('#id_email').val();
  	validate_form('id_email', 'div_form_group_email', 'id_div_alert_email', (email_val == null || email_val == '' || email_val.length > 128 || !validate_email(email_val).is_valid));

	var username_val = $('#id_username').val();
	validate_form('id_username', 'div_form_group_username', 'id_div_alert_username', (username_val == null || username_val == '' || username_val.length > 128));

	var subject_val = $('#id_subject').val();
	validate_form('id_subject', 'div_form_group_subject', 'id_div_alert_subject', (subject_val == null || subject_val == '' || subject_val.length > 128));

	var body_val = $('#id_msg').val();
	validate_form('id_msg', 'div_form_group_msg', 'id_div_alert_msg', (body_val == null || body_val == '' || body_val.length > 512));

	var title = '';
  	if($('#id_mr').parent().hasClass("active")){
    	$('#id_mr').attr('checked', 'checked');
    	title = "Mr";
    }
  	else
    	$('#id_mrs').removeAttr('checked'); 
  
  	if($('#id_mrs').parent().hasClass("active")){
    	$('#id_mrs').attr('checked', 'checked');
    	title = "Mrs";
    }
  	else
    	$('#id_mrs').removeAttr('checked'); 

  	if($('#id_ms').parent().hasClass("active")){
    	$('#id_ms').attr('checked', 'checked');
    	title = "Ms";
    }
  	else
    	$('#id_ms').removeAttr('checked'); 

  	if($('#id_miss').parent().hasClass("active")){
    	$('#id_miss').attr('checked', 'checked');
    	title = "Miss";
    }
  	else
    	$('#id_miss').removeAttr('checked'); 
  
  	if (is_valid){
  		worker.postMessage({
  			url: "http://localhost:8080/send_email",
  			username: username_val,
  			email: email_val,
  			subject: subject_val,
  			body: body_val,
  			title: title
  		});

  		$('#myModal').modal('hide');
  		$('#myModal2').modal();

		$('#id_div_progress').css('width', '10%');
		current_progress = 10;
  		progess_interval = setInterval(function(){ 
  			if (current_progress != 0){
	  			if(current_progress < 90){ 
	  				current_progress += 10;
	  				$('#id_div_progress').css('width', current_progress + '%');
	  			}
	  			else if(current_progress == 100){
	  				current_progress=0;
	  				$('#myModal2').modal('hide');
	  				$('#id_div_container_body').hide();
	  				$('#id_div_success').show();
	  			}
	  			else if(current_progress > 90){
	  				current_progress += 1;
	  				$('#id_div_progress').css('width', current_progress + '%');
	  			}
  			}
  		}, 100);
  	}

  	return false;
}

// $( document ).ready(function() {
//   var theme = getParameterByName('t');

//   if(theme == "b"){
//       $('head').find('link:first').attr('href', 'http://bootswatch.com/slate/bootstrap.min.css');
//       $('#a_home').attr('href','msafwat.html?t=b');
//       $('#a_banar').attr('href','msafwat.html?t=b');
//       $('#a_form').attr('href','form.html?t=b');
//   }
//   else if(theme == "r"){
//     $('head').find('link:first').attr('href', 'http://bootswatch.com/united/bootstrap.min.css');
//     $('#a_home').attr('href','msafwat.html?t=r');
//       $('#a_banar').attr('href','msafwat.html?t=r');
//       $('#a_form').attr('href','form.html?t=r');
//   }
//   else if(theme == "l"){
//     $('head').find('link:first').attr('href', 'http://bootswatch.com/spacelab/bootstrap.min.css');
//     $('#a_home').attr('href','msafwat.html?t=l');
//       $('#a_banar').attr('href','msafwat.html?t=l');
//       $('#a_form').attr('href','form.html?t=l');
//   }
// });

// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//         results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }


