$ ->
  do () ->
    $.jImageSwipe box: '#photoList', slide: 'ul', slideSize: 268, callback: ->

    $(document).on 'click', '#right', (event) ->
      $.jImageSwipe.right()

    $(document).on 'click', '#left', (event) ->
      $.jImageSwipe.left()


