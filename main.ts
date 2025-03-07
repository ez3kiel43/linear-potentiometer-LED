basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P0) >= 800) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (pins.analogReadPin(AnalogReadWritePin.P0) >= 600) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogReadWritePin.P0) >= 400) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogReadWritePin.P0) >= 200) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
