$ ->
  do () ->
    window.swipe = new Swipe $('#nav').get 0,
      startSlide: 0
      callback: ->

    $(document).on 'click', '#right', (event) ->
      event.preventDefault()
      window.swipe.next()

    $(document).on 'click', '#left', (event) ->
      event.preventDefault()
      window.swipe.prev()
