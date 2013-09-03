// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery/jquery.cookies.js
//
//= require bootstrap-transition
//= require bootstrap-button
//= require bootstrap-collapse
//= require bootstrap-dropdown
//= require bootstrap-modal
//= require bootstrap-tooltip
//= require bootstrap-popover
//= require bootstrap-select
//
//= require flash.js

(function() {
  var $container = $('#node'),
    switchPlacement = 200;

  $container.find('[data-toggle="popover"]').popover({
    placement: function(popover, element) {
      var $element = $(element),
        delta = $(window).width() - ($element.width() + $element.offset().left);

      return delta >= switchPlacement ? 'right' : 'left';
    }
  });

  $(document)
    // Don't close dropdown when accordion togglers are clicked
    .on('click.dropdown', '[data-toggle="collapse"]', function(e) { e.stopPropagation(); })
    // Close all collapse elements, if dropdown was closed
    .on('click.dropdown', '[data-toggle="dropdown"]', function(e) {
      var $parent = $(this).parent('.dropdown');

      if (!$parent.hasClass('open')) {
        $parent.find('.collapse.in').collapse('hide').each(function() {
          // Must set this flag to false to don't stop collapse trigger next time
          $(this).data('collapse').transitioning = false;
        });
      }
    });

  // Fix bug where collapsed class is not added
  $('.collapse').on('show hide', function(e) {
    var id = '#' + $(this).attr('id'),
      $trigger = $('[data-parent="' + id + '"], [href="' + id + '"]');

    $trigger[e.type == 'show' ? 'removeClass' : 'addClass']('collapsed');
  });

  // Keep the report dropdown open
  $('#node-report-accordion').find('.btn').click(function(e) { e.stopPropagation(); })

  $('#custom-tweet-button').click(function(event) {
    var windowWidth = 600,
        windowHeight = 400,
        windowLeft, windowTop;

    event.preventDefault();

    windowLeft = (screen.width / 2) - (windowWidth / 2);
    windowTop = (screen.height / 2) - (windowHeight / 2);

    window.open(this.href, 'twitter_share', 'width=' + windowWidth + ',height=' + windowHeight + ',left=' + windowLeft + ',top=' + windowTop);
  });
})(jQuery);