// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    return (function() {
      window.swipe = new Swipe($('#nav').get(0, {
        startSlide: 0,
        callback: function() {}
      }));
      $(document).on('click', '#right', function(event) {
        event.preventDefault();
        return window.swipe.next();
      });
      return $(document).on('click', '#left', function(event) {
        event.preventDefault();
        return window.swipe.prev();
      });
    })();
  });

}).call(this);