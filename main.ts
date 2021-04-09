input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `)
})
music.playMelody("C D E F C D E F ", 145)
music.playMelody("C5 A C5 A C5 B C5 A ", 145)
