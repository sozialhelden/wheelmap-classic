$(document).ready(function() {

$('.status-filter button').popover({trigger: 'hover'});


$('.btn-searchbar').click(function() {
	$('.navbar-form').toggleClass('active');
});
$('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

$('.close-btn, .btn-start').click(function() {
	$('.overlay').fadeOut(500);
});

map.on('popupopen', function(e) {
  $('ol.wheelchair label, ol.wheelchair input').click(function() {
    $('li.save').fadeIn(1000);
  });
});


});