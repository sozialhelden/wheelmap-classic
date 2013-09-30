$(document).ready(function () {

  var $categoryFilter = $('.category-filter');
  $('.selectpicker').selectpicker();
  $categoryFilter.customSelect();

  function createFilter() {
    var $listItem = $('<li class="filter clearfix"></li>'),
      $buttonNone = $('<button class="btn pull-right"><i class="icon-check-empty"></i></button>'),
      $buttonAll = $('<button class="btn pull-right"><i class="icon-check"></i></button>');

    $buttonAll.click(function(e) {
      e.stopPropagation();

      $categoryFilter.find('option').prop('selected', true).attr('selected', 'selected');
      $categoryFilter.trigger('change');
    });

    $buttonNone.click(function(e) {
      e.stopPropagation();

      $categoryFilter.find('option').prop('selected', false).removeAttr('selected');
      $categoryFilter.trigger('change');
    });

    $listItem.append($buttonNone).append($buttonAll);

    return $listItem;
  }

  $('.category-filter .dropdown-menu').append(createFilter());

  if (!$.cookie('_wheelmap_first_time_visitor')) {
    $('.overlay-wrapper').addClass('show-overlay');
    $.cookie('_wheelmap_first_time_visitor', true, { expires: 1000 });
  }

  $('.show-overlay').fadeIn(1200);
  $('.lookup').delay(1500).fadeIn(400);
  $('.filter').delay(3500).fadeIn(400);
  $('.categories').delay(5500).fadeIn(400);
  $('.go').delay(7000).fadeIn(400);

  $('.close-btn, .go').click(function () {
    $('.overlay-wrapper').fadeOut(500);
  });

  Flash.transferFromCookies();
  Flash.writeDataTo('error', $('#error_div_id span'), function() {
    $('#error_div_id').addClass('active');
  });
  Flash.writeDataTo('alert', $('#alert_div_id span'), function() {
    $('#alert_div_id').addClass('active');
  });
  Flash.writeDataTo('notice', $('#notice_div_id span'), function() {
    $('#notice_div_id').addClass('active');
  });

  $('.notification.active').slideDown(500).delay(8000).slideUp(400, function () {
    $(this).remove()
  });


  if (window.addEventListener) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
});