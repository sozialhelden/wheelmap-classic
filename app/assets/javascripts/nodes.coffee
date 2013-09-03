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
#= require bootstrap-select
#
#= require flash.js

$container = $("#node")
switchPlacement = 200
$container.find("[data-toggle=\"popover\"]").popover placement: (popover, element) ->
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