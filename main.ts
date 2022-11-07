input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let état_pasé = 0
let état_actuel = 0
basic.forever(function () {
    état_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (état_actuel != état_pasé) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    état_pasé = état_actuel
})
