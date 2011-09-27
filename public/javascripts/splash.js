$(function() {
  var cookieName = '_wheelmap_splash_seen';

  if(true || !$.cookie(cookieName)) {
    $.blockUI({
      message: $("#splash"),
      css: { top: '25%', width: '600px' }
    })

    $("#splash .unblock-splash").click($.unblockUI)

    $('.blockOverlay').css('cursor', 'auto').click(function() {
      $.unblockUI();
      $.cookie(cookieName, true)
    });
  }

})