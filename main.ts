input.onButtonPressed(Button.A, function () {
    if (led.point(0, 4)) {
        led.unplot(0, 4)
        led.plot(1, 4)
    } else if (led.point(1, 4)) {
        led.unplot(1, 4)
        led.plot(2, 4)
    } else if (led.point(2, 4)) {
        led.unplot(2, 4)
        led.plot(0, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (led.point(0, 4) && led.point(4, 0)) {
        led.toggle(0, 0)
        led.toggle(1, 0)
        led.toggle(0, 1)
        if (images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(1, 4) && led.point(4, 0)) {
        led.toggle(1, 0)
        led.toggle(0, 0)
        led.toggle(2, 0)
        led.toggle(1, 1)
        if (images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(2, 4) && led.point(4, 0)) {
        led.toggle(2, 0)
        led.toggle(1, 0)
        led.toggle(2, 1)
        if (images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(0, 4) && led.point(4, 1)) {
        led.toggle(0, 1)
        led.toggle(0, 0)
        led.toggle(1, 1)
        led.toggle(0, 2)
        if (images.createImage(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            # . . . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(1, 4) && led.point(4, 1)) {
        led.toggle(1, 1)
        led.toggle(0, 1)
        led.toggle(2, 1)
        led.toggle(1, 0)
        led.toggle(1, 2)
        if (images.createImage(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . # . . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(2, 4) && led.point(4, 1)) {
        led.toggle(2, 1)
        led.toggle(1, 1)
        led.toggle(2, 0)
        led.toggle(2, 2)
        if (images.createImage(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . # . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(0, 4) && led.point(4, 2)) {
        led.toggle(0, 2)
        led.toggle(0, 1)
        led.toggle(1, 2)
        if (images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            # . . . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(1, 4) && led.point(4, 2)) {
        led.toggle(1, 2)
        led.toggle(0, 2)
        led.toggle(2, 2)
        led.toggle(1, 1)
        if (images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . # . . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
    if (led.point(2, 4) && led.point(4, 2)) {
        led.toggle(2, 2)
        led.toggle(1, 2)
        led.toggle(2, 1)
        if (images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . # . .
            `) == led.screenshot()) {
            basic.showIcon(IconNames.Heart)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(4, 0)) {
        led.unplot(4, 0)
        led.plot(4, 1)
    } else if (led.point(4, 1)) {
        led.unplot(4, 1)
        led.plot(4, 2)
    } else if (led.point(4, 2)) {
        led.unplot(4, 2)
        led.plot(4, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (Math.randomBoolean()) {
        led.plot(0, 0)
    }
    if (Math.randomBoolean()) {
        led.plot(1, 0)
    }
    if (Math.randomBoolean()) {
        led.plot(2, 0)
    }
    if (Math.randomBoolean()) {
        led.plot(0, 1)
    }
    if (Math.randomBoolean()) {
        led.plot(1, 1)
    }
    if (Math.randomBoolean()) {
        led.plot(2, 1)
    }
    if (Math.randomBoolean()) {
        led.plot(0, 2)
    }
    if (Math.randomBoolean()) {
        led.plot(1, 2)
    }
    if (Math.randomBoolean()) {
        led.plot(2, 2)
    }
    led.plot(4, 0)
    led.plot(0, 4)
})
let iman = convertToText(0)
// basic.showLeds(`
// 
// . . . . #
// 
// . . . . .
// 
// . . . . .
// 
// . . . . .
// 
// # . . . .
// 
// `)
basic.clearScreen()
if (Math.randomBoolean()) {
    led.plot(0, 0)
}
if (Math.randomBoolean()) {
    led.plot(1, 0)
}
if (Math.randomBoolean()) {
    led.plot(2, 0)
}
if (Math.randomBoolean()) {
    led.plot(0, 1)
}
if (Math.randomBoolean()) {
    led.plot(1, 1)
}
if (Math.randomBoolean()) {
    led.plot(2, 1)
}
if (Math.randomBoolean()) {
    led.plot(0, 2)
}
if (Math.randomBoolean()) {
    led.plot(1, 2)
}
if (Math.randomBoolean()) {
    led.plot(2, 2)
}
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
let ima = images.createImage(`
    . . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `)

let a = hex(ima)

console.log(Object.keys(ima))
console.log("")
led.plot(4, 0)
led.plot(0, 4)
