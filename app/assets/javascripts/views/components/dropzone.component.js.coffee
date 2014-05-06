Wheelmap.NodeDropzoneComponent = Ember.Component.extend
  classNames: 'dropzone'
  acceptedFiles: 'image/*'
  paramName: 'photo[image]'
  maxFilesize: 6 #MB
  thumbnailWidth: 180
  thumbnailHeight: 180
  dropzone: null

  initDropzone: (->
    that = @

    # Fetch all options by the keys from the dropzone default options
    optionsProperties = Ember.keys(Dropzone.prototype.defaultOptions)
    options = @getProperties(optionsProperties)

    for key, option of options
      if option is undefined
        delete options[key]

    dropzone = new Dropzone(@get('element'), options)

    # Event proxy for passing dropzone events to this view
    eventProxy = (name)->
      (args...)->
        args.unshift(name)
        that.trigger.apply(that, args)

    for event in Dropzone.prototype.events
      dropzone.on event, eventProxy(event)

    @set('dropzone', dropzone)
  ).on('didInsertElement')

  clickable: (->
    @get('$clickable').toArray()
  ).property('$clickable')

  $clickable: (->
    @$('[data-toggle="dropzone"]')
  ).property()

  previewsContainer: (->
    @$('ul')[0]
  ).property()

  previewTemplate: (->
    # TODO Maybe we can use a handlebar template for this?
    '<li class="dz-preview-file fade"><a data-full-image-link data-toggle="magnific-popup" data-gallery="node"><img class="img-polaroid" data-dz-thumbnail /><span class="uploadprogress fade in" data-dz-uploadprogress /></a></li>'
  ).property()

  placePreview: (file)->
    $previewElement = $(@get('previewTemplate'))
    @get('$clickable').closest('li').before($previewElement)
    $previewElement.addClass('in');

    file.previewElement = $previewElement[0]

  addedfile: (->
    $.proxy(@placePreview, @)
  ).property()

  removeUploadProgress: (file)->
    $previewElement = $(file.previewElement);

    $previewElement.find('[data-dz-uploadprogress]').removeClass('in')
    # We need this for the magnific popup I think
    # $previewElement.find('[data-full-image-link]').attr('href', response.url).click(togglePopup)

  success: (->
    $.proxy(@removeUploadProgress, @)
  ).property()

  onError: (file, message) ->
    $previewElement = $(file.previewElement);
    $errorElement = addFlashMessage('error', '<strong>' + file.name + ':</strong> ' + message)

    if $.support.transition
      $errorElement.on $.support.transition.end, ()->
        $errorElement.remove()
        $previewElement.removeClass('in')

      $previewElement.on $.support.transition.end, ()->
        $previewElement.remove()

    $previewElement.addClass('error')

  error: (->
    $.proxy(@onError, @)
  ).property()

  placeFallback: ->
    $container = @get('$clickable').parent()

    $submit = $container.find('.upload')
    $fallback = $container.find('.fallback')
    $fallbackInput = $fallback.find('input')

    $fallback.show()

    $fallbackInput.change () ->
      $submit.addClass('in');

    $submit.click (e) ->
      e.preventDefault()
      $fallback.closest('form').submit()

  fallback: (->
    $.proxy(@placeFallback, @)
  ).property()

Ember.Handlebars.helper('node-dropzone', Wheelmap.NodeDropzoneComponent)