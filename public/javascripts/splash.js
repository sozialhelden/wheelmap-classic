$(function() {
  var cookieName = '_wheelmap_splash_seen';

  if(!$.cookie(cookieName)) {
    width = 600; // splash width

    // calculate left edge so it is centered
    left = (0.5 - (width / 2)/($(window).width())) * 100 + '%';

    $.blockUI({
      message: $("#splash"),
      css: {
              top: '25%',
              left: left,
              width: width + 'px'
           }
    });

    var clickHandler = function() {
      $.unblockUI();
      $.cookie(cookieName, true);
      return false;
    };

    $("#splash .unblock-splash").click(clickHandler);
    $('.blockOverlay').css('cursor', 'auto').click(clickHandler);

    $('a.whatis').click(function() {
      $.cookie(cookieName, true);
      return true;
    });

  }

})