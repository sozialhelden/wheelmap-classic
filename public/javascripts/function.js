$(document).ready(function() {

$('.btn-searchbar').click(function() {
	$('.searchbar').toggleClass('active');
});
$('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

$('.close-btn, .btn-start').click(function() {
		 	$('.overlay').fadeOut(500);
});



});