#= require jquery
#= require jquery_ujs
#= require jquery/jquery.cookies.js
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
#= require flash
#= require dropzone

$container = $("#node")
switchPlacement = 200
$container.find("[data-toggle=\"popover\"]").popover
  placement: (popover, element) ->
    $element = $(element)
    delta = $(window).width() - ($element.width() + $element.offset().left)
    (if delta >= switchPlacement then "right" else "left")


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


$dropzone = $('#node-photo-dropzone');
$dropzoneClickable = $dropzone.find('[data-toggle="dropzone"]')

createErrorElement = () ->
  $('<div class="alert alert-error fade in"><a class="close" data-dismiss="alert">&times;</a></div>').prependTo($dropzone)

if $dropzoneClickable.length > 0
  $dropzonePreviewContainer = $dropzone.find('ul')

  new Dropzone $dropzone[0],
    previewsContainer: $dropzonePreviewContainer[0]
    clickable: $dropzoneClickable.toArray()
    acceptedFiles: 'image/*'
    maxFilesize: 1 #MB
    thumbnailWidth: 180
    thumbnailHeight: 180
    previewTemplate: '<li class="dz-preview-file fade"><a data-full-image-link><img class="img-polaroid" data-dz-thumbnail /><span class="uploadprogress fade in" data-dz-uploadprogress /></a></li>',
    paramName: 'photo[image]'
    addedfile: (file) ->
      $previewElement = $(@.options.previewTemplate)
      $dropzoneClickable.closest('li').before($previewElement)
      $previewElement.addClass('in');

      file.previewElement = $previewElement[0]
    complete: (file) ->
      $(file.previewElement).find('[data-dz-uploadprogress]').removeClass('in')
      # Add some how the link to the uploaded image (API?) for displaying it in the gallery (search for elements with [data-full-image-link])
    error: (file, message) ->
      $previewElement = $(file.previewElement);

      $errorElement = createErrorElement().append('<strong>' + file.name + ':</strong> ' + message)

      $errorElement.on 'close', () ->
        $previewElement.removeClass('in')
      $errorElement.on 'closed', () ->
        $previewElement.remove()

      $previewElement.addClass('error')

  $dropzoneClickable.click (e) ->
    e.preventDefault()