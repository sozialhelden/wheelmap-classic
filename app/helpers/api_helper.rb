module ApiHelper
  def widget(options)
    content_tag('iframe', nil, width: options.width,
                               height: options.height,
                               frameborder: 0,
                               style: 'border:0',
                               src: options.src,
                               allowfullscreen: true)
  end
end
