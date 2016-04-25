#= require jquery
#= require jquery_ujs
#= require jquery/jquery.cookies.js
#= require i18n.js
#= require bootstrap-transition
#= require bootstrap-button
#= require bootstrap-collapse
#= require bootstrap-dropdown
#= require bootstrap-modal
#= require bootstrap-tooltip
#= require bootstrap-popover
#= require bootstrap-alert
#= require bootstrap-select
#
#= require jquery/jquery.magnific-popup.js
#= require responsive-popover
#= require dropzone
#= require_self
#= require nodes-new

I18n.defaultLocale = 'en'
I18n.locale = $('html').attr('lang')
I18n.fallbacks = true

$container = $(".node-status")
$container.find("[data-toggle=\"popover\"]").each ->
  $this = $(@)
  $this.popover
    title: () ->
      return $this.data('title')
    content: () ->
      return $this.data('content')


$(document).on("click.dropdown", "[data-toggle=\"collapse\"]", (e) ->
  # Don't close dropdown when accordion togglers are clicked
  e.stopPropagation()
).on "click.dropdown", "[data-toggle=\"dropdown\"]", (e) ->
  # Close all collapse elements, if dropdown was closed
  $parent = $(this).parent(".dropdown")
  unless $parent.hasClass("open")
    $parent.find(".collapse.in").collapse("hide").each ->

      # Must set this flag to false to don't stop collapse trigger next time
      $(this).data("collapse").transitioning = false


$(".collapse").on "show hide", (e) ->
  # Fix bug where collapsed class is not added
  id = "#" + $(this).attr("id")
  $trigger = $("[data-parent=\"" + id + "\"], [href=\"" + id + "\"]")
  $trigger[(if e.type is "show" then "removeClass" else "addClass")] "collapsed"


$("#node-report-accordion").find(".btn").click (e) ->
  # Keep the report dropdown open
  e.stopPropagation()


openSharePopup = (link, name, windowWidth = 600, windowHeight = 400) ->
  windowLeft = (screen.width / 2) - (windowWidth / 2)
  windowTop = (screen.height / 2) - (windowHeight / 2)

  window.open(link, name, 'width=' + windowWidth + ',height=' + windowHeight + ',left=' + windowLeft + ',top=' + windowTop)

$('[data-toggle="share"]').click (e) ->
  data = $(this).data()

  e.preventDefault()
  openSharePopup this.href, data.name, data.width, data.height


togglePopup = (e) ->
  e.preventDefault()

  $this = $(@)
  options = $.extend({}, $this.data())
  index = 0

  if options.gallery?
    $items = $("[data-gallery=\"#{options.gallery}\"]")
    options.items = $.map $items, (item, index) ->
      { index: index, src: $(item).attr('href'), type: 'image', parsed: true }
    index = $items.index($this)
    options.gallery = { enabled: true }

  $.magnificPopup.open(options, index)


$('[data-toggle="magnific-popup"]').click(togglePopup)

$flashWrapper = $('.flash-wrapper')

addFlashMessage = (type, message) ->
  $message = $("<div class='flash fade'></div>").addClass(type).html(message)
  $flashWrapper.append($message)

  delay = message.split(' ').length / 0.00333333333 + 0.5 # based on 200 WpM

  setTimeout (()-> $message.addClass('in')), 0
  setTimeout (()->
    $message.removeClass('in')

    if ($.support.transition)
      $message.one $.support.transition.end, -> $message.remove()
    else
      $message.remove()
  ), delay

  $message

showFlashMessags = ->
  data = JSON.parse $.cookie("flash")

  types = ['alert', 'notice', 'error', 'success']

  if data?
    for type in types
      if data[type]?
        addFlashMessage(type, data[type])

  $.cookie('flash', null, path: '/')

  return

showFlashMessags()

# Status update
$('[data-toggle="status"]').click (e) ->
  e.preventDefault()
  e.stopPropagation() # stop propagation to the dropdown close event

  $this = $(@)
  data = $this.data()
  # Needed for having status and help texts of the choosen accessibility
  statusTexts = $this.find('[data-toggle="popover"]').data()

  $dropdown = $this.closest('.dropdown')

  $dropdown.find('.alert').alert('close')

  $checkboxes = $dropdown.find('[role="menu"] .wm-checkbox')
  $checkboxes.removeClass('checked')

  $checkboxes.filter('.' + data.status).addClass('checked')

  $buttonDropdown = $dropdown.find('[data-toggle="dropdown"]')
  $buttonDropdown.removeClass (i, j) ->
    j.match(/yes|no|limited|unknown/g).join(' ')
  $buttonDropdown.addClass(data.status)
  $buttonDropdown.find('.text').text(statusTexts.title)

  $buttonDropdown.find('[data-toggle="popover"]').data
    title: statusTexts.title
    content: statusTexts.content

  $buttonSubmit = $dropdown.find('[data-toggle="status-submit"]')
  $buttonSubmit.data('status', data.status).prop('disabled', false)

csrfParam = $('meta[name="csrf-param"]').attr('content')
csrfToken = $('meta[name="csrf-token"]').attr('content')

$('.selectpicker').selectpicker();

$('#allianz').show() if I18n.locale == 'de' and $('article#node').data('category') == 'sport'

$('[data-toggle="status-submit"]').click (e) ->
  e.preventDefault()

  $this = $(@)
  data = $this.data()

  if (!data.status?)
    return

  post =
    _method: 'PUT'

  post[data.property] = data.status
  post[csrfParam] = csrfToken

  $.post data.url,
    post,
    (data) ->
      addFlashMessage('notice', data.message)

      $this.prop('disabled', true)
      $this.data('status', null)
    , 'json' # DataType


$dropzone = $('#node-photo-dropzone');
$dropzoneClickable = $dropzone.find('[data-toggle="dropzone"]')

if $dropzoneClickable.length > 0
  $dropzonePreviewContainer = $dropzone.find('ul')

  $dropzoneClickable.click (e) ->
    e.preventDefault()

  new Dropzone $dropzone[0],
    previewsContainer: $dropzonePreviewContainer[0]
    clickable: $dropzoneClickable.toArray()
    acceptedFiles: 'image/*'
    maxFilesize: 6 #MB
    thumbnailWidth: 180
    thumbnailHeight: 180
    previewTemplate: '<li class="dz-preview-file fade"><a data-full-image-link data-toggle="magnific-popup" data-gallery="node"><img class="img-polaroid" data-dz-thumbnail /><span class="uploadprogress fade in" data-dz-uploadprogress /></a></li>',
    paramName: 'photo[image]'

    addedfile: (file) ->
      $previewElement = $(@.options.previewTemplate)
      $dropzoneClickable.closest('li').before($previewElement)
      $previewElement.addClass('in');

      file.previewElement = $previewElement[0]
    success: (file, response) ->
      $previewElement = $(file.previewElement);

      $previewElement.find('[data-dz-uploadprogress]').removeClass('in')
      $previewElement.find('[data-full-image-link]').attr('href', response.url).click(togglePopup)

    error: (file, message) ->
      $previewElement = $(file.previewElement);
      $errorElement = addFlashMessage('error', '<strong>' + file.name + ':</strong> ' + message)

      if $.support.transition
        $errorElement.on $.support.transition.end, ()->
          $errorElement.remove()
          $previewElement.removeClass('in')

        $previewElement.on $.support.transition.end, ()->
          $previewElement.remove()

      $previewElement.addClass('error')
    fallback: () ->
      $container = $dropzoneClickable.parent()
      $submit = $container.find('.upload')
      $fallback = $container.find('.fallback')
      $fallbackInput = $fallback.find('input')

      $fallback.show()

      $fallbackInput.change () ->
        $submit.addClass('in');

      $submit.click (e) ->
        e.preventDefault()
        $fallback.closest('form').submit()