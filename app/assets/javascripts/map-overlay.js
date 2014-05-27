(function($) {

  if (!$.cookie('first_time_visitor')) {
    $.cookie('first_time_visitor', true, { expires: 1000, path: '/' });

    var $overlayWrapper = $('.overlay-wrapper');

    $overlayWrapper.show();

    setTimeout(function() {
      $overlayWrapper.addClass('in');
    }, 0);

    $overlayWrapper.find('.close-btn, .go').click(function () {
      if ($.support.transition && $.support.transition.end) {
        $overlayWrapper.one($.support.transition.end, function() {
          $overlayWrapper.hide();
        });
      }
      $overlayWrapper.removeClass('in');
    });
  }

})(jQuery);