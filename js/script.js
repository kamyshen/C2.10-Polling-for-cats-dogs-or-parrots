const url_c = new URL("https://sf-pyw.mosyag.in/sse/vote/cats")
const url_d = new URL("https://sf-pyw.mosyag.in/sse/vote/dogs")
const url_p = new URL("https://sf-pyw.mosyag.in/sse/vote/parrots")
$(document).ready(init);

function init(){
	$('#btnCats').click(function() {
		vote("cats")});
	$('#btnDogs').click(function() {
		vote("dogs")});
	$('#btnParrots').click(function() {
		vote("parrots")});
}


function vote(pet) {
	console.log(pet);
	pet == "cats" ? $.post(url_c, function(data, status){console.log(data, status, 'success with cats')}) :
	pet == "dogs" ? $.post(url_d, function(data, status){console.log(data, status, 'success with dogs')}) :
	pet == "parrots" ? $.post(url_p, function(data, status){console.log(data, status, 'success with parrots')}) : null;
	
}