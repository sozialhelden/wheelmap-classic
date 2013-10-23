(function($) {
  $.extend($.fn.popover.defaults, {
    switchPlacement: 200, // We do not really need that. How to calc the width of hidden popover?
    placement: function(popover, element) {
      var $popover = $(popover),
        $element = $(element),
        delta = $(window).width() - ($element.width() + $element.offset().left);

      if (delta >= this.options.switchPlacement) return 'right';
      return 'left';
    }
  });
})(jQuery);