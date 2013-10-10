$document = $(document)

$document.on 'click.dropdown', '[data-toggle="collapse"]', (e)->
  # Don't close dropdown when accordion togglers are clicked
  e.stopPropagation()

$document.on 'click.dropdown', '[data-toggle="dropdown"]', (e)->
  # Close all collapse elements, if dropdown was closed
  $parent = $(this).parent('.dropdown')

  unless $parent.hasClass('open')
    $parent.find('.collapse.in').collapse('hide').each ->
      # Must set this flag to false to don't stop collapse trigger next time
      $(this).data('collapse').transitioning = false