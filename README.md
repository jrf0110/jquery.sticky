# jQuery `Active` Class Rotator

Applies an ```active``` class to a set of elements one at a time at a specific interval.

## Usage

```javascript
var savingsInterval = $('.my-sayings > li').activeInterval({
  interval: 3000
}).start();
```

## Install

```
bower install jquery.active-rotator
```

## Documentation

__Options:__

```javascript
// Defaults
{
  // Time between each tick
  interval:       5000
  // Class name to use for active element
, className:      'active'
  // Class name to use for the next active element
, upNext:         'up-next'
  // Before the class change occurs
, onTickBefore:   function( interval ){}
  // As the class change occurs
, onRotate:       function( $el, interval ){}
};
```

The plugin returns an interface for handling the rotation.

### start()

Starts the interval.

### stop()

Stops the interval.

### go( index )

Go to a specific position

### next()

Got to the previous position

### prev()

Got to the next position
