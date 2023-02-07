function BATATA_QUEIMOU () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
    for (let index = 0; index < 3; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < randint(8, 30); index++) {
        BATATA_QUENTE()
    }
    BATATA_QUEIMOU()
})
function BATATA_QUENTE () {
    basic.showLeds(`
        . . # # .
        . # # # #
        # # # # #
        # # # # #
        . # # . .
        `)
    basic.showLeds(`
        . . # # .
        . # . . #
        # . . . #
        # . . # #
        . # # . .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
}
basic.showLeds(`
    . . # # .
    . # # # #
    # # # # #
    # # # # #
    . # # . .
    `)
