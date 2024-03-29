// Generated by CoffeeScript 1.3.3
(function() {

  (function($) {
    var box, currentPosition, numberOfSlides, options, slider, slides;
    box = '';
    slides = '';
    currentPosition = 0;
    numberOfSlides = 0;
    options = {
      box: '',
      slide: '',
      slideSize: 0,
      callback: function() {}
    };
    $.jImageSwipe = function(opts) {
      $.extend(options, opts);
      box = $(options.box);
      slides = $(options.slide);
      numberOfSlides = slides.length;
      $(document).on('swipeleft', options.selector, function(event) {
        return slider('left');
      });
      $(document).on('swiperight', options.selector, function(event) {
        return slider('right');
      });
      $(window).on('keydown', function(event) {
        if (event.keyCode === 37) {
          slider('left');
        }
        if (event.keyCode === 39) {
          return slider('right');
        }
      });
      $(box).on("webkitTransitionEnd", function() {
        return options.callback();
      });
      $(box).on("transitionend", function() {
        return options.callback();
      });
      $(box).on("msTransitionEnd", function() {
        return options.callback();
      });
      return $(box).on("oTransitionEnd", function() {
        return options.callback();
      });
    };
    $.jImageSwipe.left = function() {
      return slider('left');
    };
    $.jImageSwipe.right = function() {
      return slider('right');
    };
    return slider = function(type) {
      var isRight, position;
      isRight = type === 'right';
      if ((currentPosition === 0) && (type === 'right')) {
        return;
      }
      if ((currentPosition === numberOfSlides - 1) && (type === 'left')) {
        return;
      }
      currentPosition = (isRight ? currentPosition - 1 : currentPosition + 1);
      position = options.slideSize * currentPosition;
      return $(box).css({
        webkitTransform: 'translateX(-' + position + 'px)',
        webkitTransitionTimingFunction: 'ease-in-out',
        webkitTransitionDuration: '0.5s',
        MozTransform: 'translateX(-' + position + 'px)',
        MozTransitionTimingFunction: 'ease-in-out',
        MozTransitionDuration: '0.5s',
        msTransform: 'translateX(-' + position + 'px)',
        msTransitionTimingFunction: 'ease-in-out',
        msTransitionDuration: '0.5s',
        OTransform: 'translateX(-' + position + 'px)',
        OTransitionTimingFunction: 'ease-in-out',
        OTransitionDuration: '0.5s'
      });
    };
  })(jQuery);

}).call(this);
