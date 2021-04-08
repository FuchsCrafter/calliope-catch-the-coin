enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
function gameLoop () {
    coins = game.createSprite(randint(0, 4), 0)
    coins.turn(Direction.Right, 45)
    coins.turn(Direction.Right, 45)
    for (let index = 0; index < 4; index++) {
        coins.move(1)
        basic.pause(250)
    }
    if (coins.isTouching(player)) {
        basic.setLedColor(0x00ff00)
        game.addScore(1)
        game.addLife(1)
        if (audio) {
            music.playTone(523, music.beat(BeatFraction.Half))
        } else {
            music.rest(music.beat(BeatFraction.Half))
        }
        basic.turnRgbLedOff()
    } else {
        basic.setLedColor(0xff0000)
        game.removeLife(3)
        if (audio) {
            music.playTone(131, music.beat(BeatFraction.Half))
        } else {
            music.rest(music.beat(BeatFraction.Half))
        }
        basic.turnRgbLedOff()
    }
    coins.delete()
}
function init () {
    player = game.createSprite(2, 4)
    game.setScore(0)
    game.setLife(3)
    audio = true
}
input.onGesture(Gesture.LogoDown, function () {
    audio = !(audio)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(100)
    game.setLife(0)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let audio = false
let coins: game.LedSprite = null
let player: game.LedSprite = null
init()
basic.forever(function () {
    gameLoop()
})
