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
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
	
})
