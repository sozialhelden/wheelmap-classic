$(document).ready(function() {
  $('.selectpicker').selectpicker();

  I18n.defaultLocale = 'de';
  I18n.locale = $('html').attr('lang');

  $('.status-filter button').popover({
    trigger: 'hover',
    placement: getPopoverPlacement
  });

  $('.btn-searchbar').click(function() {
    $('.navbar-form').toggleClass('active');
  });
  $('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

  $('.close-btn, .btn-start').click(function() {
    $('.overlay').fadeOut(500);
  });

  function getPopoverPlacement(){
    if (window.innerWidth < 767) {
      return 'top';
    } else {
      return 'bottom';
    }
  }
  function ResizeElements() {
    var widthMobile = $(window).width();
    if (widthMobile < 420) {
      $('.category-filter .filter-option').addClass('icon-tags');
    }
    else {
      $('.category-filter .filter-option').removeClass('icon-tags');
    }
    var widthTablet = $(window).width();
    if (widthTablet < 767) {
      $('.category-filter').addClass('dropup');
    }
    else {
      $('.category-filter').removeClass('dropup');
    }
  }
  $(window).load(ResizeElements);
  $(window).resize(ResizeElements);


  if (window.addEventListener) {
    window.addEventListener("load",function() {
      setTimeout(function(){
        window.scrollTo(0, 1);
      }, 0);
    });
  }

  $(['yes', 'no', 'limited', 'unknown']).each(function(index, item){
    if ($.cookie('filter_'+item)) {
      $('.status-filter button.'+item).addClass('active');
    } else {
      $('.status-filter button.'+item).removeClass('active');
    }
  });
  requestNodes(map.getBounds());

});