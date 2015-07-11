var regex_response = {
	input: '',
	pattern: '',
	is_valid: false
}

function validate_email(input){
	regex_response.input = input;
	regex_response.pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
	regex_response.is_valid = regex_response.pattern.test(regex_response.input);
	return regex_response;
}

function validate_num16_hyphen4(input){
	regex_response.input = input;
	regex_response.pattern = /^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
	regex_response.is_valid = regex_response.pattern.test(regex_response.input);
	return regex_response;
}

function validate_age(input){
	regex_response.input = input;
	regex_response.pattern = /^[\d\,\.]*$/;
	regex_response.is_valid = regex_response.pattern.test(regex_response.input);
	return regex_response;
}
