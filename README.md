# jQuery Sticky

Much like the bootstrap affix plugin, but with some improvements. This is still in early development and the transitions are a little jumpy, but I figure I'll put this here and fix it later.

This plugin has two main benefits over Bootstrap affix:

1. It does not depend on Bootstrap
2. You can define scrollY start and endpoints for the sticky element

## Usage

```javascript
// When the #side-nav comes into view, stick it to the screen
$('#side-nav').sticky({
  // Offset the sticky side-nav from the fixed header
  offsetY: $('#header').height() + 20
});
```

## Install

```
bower install jquery.sticky
```

## Documentation

__Options:__

```javascript
options: {
  throttle   // How often do we execute the scroll listener in ms
  offsetY    // Sticky offset from the top
  stopAt     // Selector of the element whose bottom border should define
             // the stopping point for the sticky element
  onStick    // Called when the elements shifts to position fixed
  onUnStick  // Called when the elements return to normal position
  onStop     // Called when the elements shifts to position absolute
}
```

The ```.sticky()``` function returns the following interface:

### Methods

#### stick()

Manually stick the element into fixed position.

#### stickToBottom()

Manually stick the element to its stopping point into absolute position.

#### unstick()

Manually un-stick the element into static position.

#### isStuck()

Returns a boolean. True if the element is in stuck position (fixed).

#### startListening()

Adds the scroll listener to window. This is called whenever the main plugin function is applied.

#### stopListening()

Remove the listener on window.

### Properties

#### $el

The elements assigned.

#### offsetTop

The calculated offsetTop of the plugin element with the options.offsetY applied.

#### stopAt

When the ```options.stopAt``` selector is provided, this property stores the calculated window.scrollY value for sticking the element to the bottom.