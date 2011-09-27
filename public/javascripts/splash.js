$(function() {
  var cookieName = '_wheelmap_splash_seen';

  if(!$.cookie(cookieName)) {
    wwidth = $(window).width();
    left = (0.5 - 300/wwidth) * 100 + '%';

    $.blockUI({
      message: $("#splash"),
      css: {
              top: '25%',
              left: left,
              width: '600px'
           }
    });

    $("#splash .unblock-splash").click($.unblockUI)

    $('.blockOverlay').css('cursor', 'auto').click(function() {
      $.unblockUI();
      $.cookie(cookieName, true)
    });
  }

})