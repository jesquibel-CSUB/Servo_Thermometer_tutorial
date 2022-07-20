pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    basic.showNumber(input.temperature())
    pins.servoWritePin(AnalogPin.P0, pins.map(
    input.temperature(),
    -5,
    50,
    0,
    180
    ))
})
