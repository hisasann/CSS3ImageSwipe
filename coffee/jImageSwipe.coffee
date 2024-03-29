(($) ->

  box = ''
  slides = ''
  currentPosition = 0
  numberOfSlides = 0

  options =
    box: ''
    slide: ''
    slideSize: 0
    callback: ->

  $.jImageSwipe = (opts) ->
    $.extend options, opts

    box = $ options.box
    slides = $ options.slide
    numberOfSlides = slides.length

    $(document).on 'swipeleft', options.selector, (event) ->
      slider 'left'

    $(document).on 'swiperight', options.selector, (event) ->
      slider 'right'

    # キーボードにも対応
    $(window).on 'keydown', (event) ->
      if event.keyCode is 37
        slider 'left'

      if event.keyCode is 39
        slider 'right'

    $(box).on "webkitTransitionEnd", () ->
      options.callback()
    $(box).on "transitionend", () ->
      options.callback()
    $(box).on "msTransitionEnd", () ->
      options.callback()
    $(box).on "oTransitionEnd", () ->
      options.callback()

  $.jImageSwipe.left = () ->
    slider 'left'

  $.jImageSwipe.right = () ->
    slider 'right'

  slider = (type) ->
    isRight = type is 'right'

    # 一番左
    if (currentPosition is 0) and (type is 'right')
      return

    # 一番右
    if (currentPosition is numberOfSlides - 1) and (type is 'left')
      return

    currentPosition = (if isRight then currentPosition - 1 else currentPosition + 1)
    position = options.slideSize * (currentPosition)
    $(box).css
      webkitTransform: 'translateX(-' + position + 'px)'
      webkitTransitionTimingFunction: 'ease-in-out'
      webkitTransitionDuration: '0.5s'
      MozTransform: 'translateX(-' + position + 'px)'
      MozTransitionTimingFunction: 'ease-in-out'
      MozTransitionDuration: '0.5s'
      msTransform: 'translateX(-' + position + 'px)'
      msTransitionTimingFunction: 'ease-in-out'
      msTransitionDuration: '0.5s'
      OTransform: 'translateX(-' + position + 'px)'
      OTransitionTimingFunction: 'ease-in-out'
      OTransitionDuration: '0.5s'

)(jQuery)
