def on_button_pressed_a():
    music.play_tone(988, music.beat(BeatFraction.WHOLE))
    serial.write_number(input.temperature())
    basic.show_number(input.temperature())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    serial.write_string("LABII")
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_data_received():
    basic.show_string(serial.read_until(serial.delimiters(Delimiters.NEW_LINE)))
    music.start_melody(music.built_in_melody(Melodies.BA_DING), MelodyOptions.ONCE)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

basic.show_icon(IconNames.HEART)
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE9600)

def on_forever():
    pass
basic.forever(on_forever)
