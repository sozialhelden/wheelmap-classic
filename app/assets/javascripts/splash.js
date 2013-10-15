$(function() {
  var cookieName = '_wheelmap_splash_seen';
  var setCookie = function() {
    $.cookie(cookieName, true, { expires: 1000 });
  };

  if(!$.cookie(cookieName)) {
    var width = 600; // splash width

    // calculate left edge so it is centered
    var left = (0.5 - (width / 2)/($(window).width())) * 100 + '%';
    if ($('#splash').length > 0 ){
      $.blockUI({
        message: $("#splash"),
        css: {
                top: '25%',
                left: left,
                width: width + 'px'
             }
      });
    }


    var clickHandler = function() {
      $.unblockUI();
      setCookie();
      return false;
    };

    $("#splash .unblock-splash").click(clickHandler);
    $('.blockOverlay').css('cursor', 'auto').click(clickHandler);

    $('a.whatis').click(function() {
      setCookie();
      return true;
    });

  }

});