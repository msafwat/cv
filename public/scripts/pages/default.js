function load_page(elm, pg){
	$("#id_div_page").load('templates/'+pg);
	return false;
}

$(document).ready(function() {
	$("#id_a_home").click();
});