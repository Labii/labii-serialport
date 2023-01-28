input.onButtonPressed(Button.A, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    serial.writeNumber(input.temperature())
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    serial.writeString("LABII")
    basic.showIcon(IconNames.Yes)
})
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
