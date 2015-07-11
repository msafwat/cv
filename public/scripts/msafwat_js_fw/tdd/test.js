test("regex.js -> validate_email", 3, function () {
	var input = 'mostafa.safwat.1@gmail.com';
	var res = validate_email(input);
	equal(res.is_valid, true, "mostafa.safwat.1@gmail.com Passed");

	input = 'abc';
	res = validate_email(input);
	equal(res.is_valid, false, "abc not Passed");

	input = '';
	res = validate_email(input);
	equal(res.is_valid, false, "'' Not Passed");
});

test("regex.js -> validate_num16_hyphen4", 2, function () {
	var input = '0123456789123456';
	var res = validate_num16_hyphen4(input);
	equal(res.is_valid, true, "0123456789123456 Passed");

	input = '0123-4567-8912-3456';
	res = validate_num16_hyphen4(input);
	equal(res.is_valid, true, "0123-4567-8912-3456 Passed");
});

test("regex.js -> validate_age", 5, function () {
	var input = '30';
	var res = validate_age(input);
	equal(res.is_valid, true, "30 Passed");

	input = '30.0';
	res = validate_age(input);
	equal(res.is_valid, true, "30.0 Passed");

	input = '30,0';
	res = validate_age(input);
	equal(res.is_valid, true, "30,0 Passed");

	input = '';
	res = validate_age(input);
	equal(res.is_valid, true, "'' Passed");

	input = '30-0';
	res = validate_age(input);
	equal(res.is_valid, false, "30-0 Not Passed");
});