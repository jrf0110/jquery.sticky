/**
 * Component.Sticky
 *
 * Makes an element stick to the screen
 *
 * Returns an interface to control the sticky elements:
 *   Methods:     stick|stickToBottom|unstick|isStuck|startListening|stopListening
 *   Properties:  offsetTop|stopAt|$el
 * 
 * Options:
 *   `throttle`   - How often do we execute the scroll listener
 *   `offsetY`    - Sticky offset from the top
 *   `stopAt`     - Selector to stop being sticky and stick to bottom
 *   `onStick`    - Called when the elements shifts to position fixed
 *   `onUnStick`  - Called when the elements return to normal position
 *   `onStop`     - Called when the elements shifts to position absolute
 */

;(function( factory ){
  if ( typeof define === 'function' && define.amd ){
    define( ['jquery'], factory );
  } else {
    factory( jQuery );
  }
})(function( $ ){
  'use strict';

  // Throttle taken from the underscore source
  var throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options = options || {};
    var later = function() {
      previous = options.leading === false ? 0 : new Date();
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  $.fn.sticky = function( options ){
    var $window = $(window);
    var $this = this;
    var $stopEl, $elParent, stopAt, stopParentOffset;

    var defaults = {
      throttle:   25
    , offsetY:    0
    , onStick:    function(){}
    , onUnStick:  function(){}
    , onStop:     function(){}
    };

    options = $.extend( {}, defaults, options );

    if ( options.stopAt ){
      $stopEl = $( options.stopAt );
      $elParent = $( $this[0].parentElement );
      stopAt = $stopEl.offset().top + $stopEl.height() - $this.height() - options.offsetY;
      stopParentOffset = 0 - stopAt + $elParent.offset().top - $elParent.height() - options.offsetY;
    }

    var module = {
      offsetTop: $this.offset().top - options.offsetY

    , stopAt: stopAt

    , $el: $this

    , stick: function(){
        $this.css({
          position: 'fixed'
        , top: options.offsetY + 'px'
        , bottom: ''
        });

        module._isStuck = true;

        return $this;
      }

    , unstick: function(){
        $this.css({
          position: ''
        , top: ''
        , bottom: ''
        });

        module._isStuck = false;

        return $this;
      }

    , isStuck: function(){
        return !!module._isStuck;
      }

    , stickToBottom: function(){
        $this.css({
          position: 'absolute'
        , top: ''
        , bottom: stopParentOffset + 'px'
        });

        return $this;
      }

    , startListening: function(){
        $window.scroll( module.scrollHandler );
        module.scrollHandler();
        return $this;
      }

    , stopListening: function(){
        $window.off( 'scroll', module.scrollHandler );
        return $this;
      }

    , scrollHandler: throttle( function(){
        var scrollTop = $window.scrollTop();
        if ( scrollTop > module.offsetTop ){
          if ( stopAt && scrollTop >= stopAt ){
            module.stickToBottom();
          } else {
            module.stick();
          }
        } else if ( module.offsetTop >= scrollTop ){
          module.unstick();
        }
      }, options.throttle )
    };

    module.startListening();

    return module;
  };
});