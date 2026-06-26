
> Open this page at [https://gerardfp.github.io/pxt-superled/](https://gerardfp.github.io/pxt-superled/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/gerardfp/pxt-superled** and import


## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/gerardfp/pxt-superled** and click import

## API Documentation

This extension provides several utilities for working with the micro:bit LED screen.

### `isOnScreen`
Compares the image on the screen with another image. Returns `true` if they match, `false` otherwise.
```blocks
SuperLED.isOnScreen(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

### `areOff`
Checks if all the specified LEDs in the pattern are turned off on the screen.
```blocks
SuperLED.areOff(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

### `areOn`
Checks if all the specified LEDs in the pattern are turned on on the screen.
```blocks
SuperLED.areOn(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

### `setRandom`
Randomly turns on the specified LEDs.
```blocks
SuperLED.setRandom(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

### `toggle`
Toggles (inverts) the specified LEDs on the screen.
```blocks
SuperLED.toggle(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

### `turnOff`
Turns off the specified LEDs.
```blocks
SuperLED.turnOff(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

### `turnOn`
Turns on the specified LEDs.
```blocks
SuperLED.turnOn(images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`))
```

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

