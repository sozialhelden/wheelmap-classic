$(document).ready(function() {
  $('.selectpicker').selectpicker();

  I18n.defaultLocale = 'de';
  I18n.locale = $('html').attr('lang');

  $('.status-filter button').popover({trigger: 'hover'});

  $('.btn-searchbar').click(function() {
    $('.navbar-form').toggleClass('active');
  });
  $('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

  $('.close-btn, .btn-start').click(function() {
    $('.overlay').fadeOut(500);
  });


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
      $('.status-filter button').attr('data-placement', 'top').popover();
    }
    else {
      $('.category-filter').removeClass('dropup');
      $('.status-filter button').attr('data-placement', 'bottom').popover();
      console.log($(window).width());
    }
  }
  $(window).load(ResizeElements);
  $(window).resize(ResizeElements);


  if (window.addEventListener) {
    window.addEventListener("load",function() {
      setTimeout(function(){
        window.scrollTo(0, 0);
      }, 0);
    });
  }

  requestNodes(map.getBounds());

});