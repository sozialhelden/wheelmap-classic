/* eslint no-var: "off" */
(function ($) {
  var $overlayWrapper;

  if (!$.cookie('first_time_visitor')) {
    $overlayWrapper = $('.overlay-wrapper');

    $.cookie('first_time_visitor', true, { expires: 1000, path: '/' });

    $overlayWrapper.show();

    setTimeout(function () {
      $overlayWrapper.addClass('in');
    }, 0);

    $overlayWrapper.find('.close-btn, .go').click(function () {
      if ($.support.transition && $.support.transition.end) {
        $overlayWrapper.one($.support.transition.end, function () {
          $overlayWrapper.hide();
        });
      }
      $overlayWrapper.removeClass('in');
    });
  }
}(jQuery));
