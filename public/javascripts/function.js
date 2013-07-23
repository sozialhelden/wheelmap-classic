$(document).ready(function () {

  $('.selectpicker').selectpicker();

  if (!$.cookie('_wheelmap_first_time_visitor')) {
    $('.overlay-wrapper').addClass('show-overlay');
    $.cookie('_wheelmap_first_time_visitor', true, { expires: 1000 });
  }

  $('.show-overlay').fadeIn(1200);
  $('.lookup').delay(1500).fadeIn(400);
  $('.filter').delay(3500).fadeIn(400);
  $('.categories').delay(5500).fadeIn(400);
  $('.go').delay(7000).fadeIn(400);

  $('.close-btn, .go').click(function () {
    $('.overlay-wrapper').fadeOut(500);
  });

  Flash.transferFromCookies();
  Flash.writeDataTo('error', $('#error_div_id span'), function() {
    $('#error_div_id').addClass('active')
  });
  Flash.writeDataTo('alert', $('#alert_div_id span'), function() {
    $('#alert_div_id').addClass('active')
  });
  Flash.writeDataTo('notice', $('#notice_div_id span'), function() {
    $('#notice_div_id').addClass('active')
  });

  if (window.addEventListener) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
});