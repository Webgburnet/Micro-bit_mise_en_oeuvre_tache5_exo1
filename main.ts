input.onButtonPressed(Button.A, function () {
    while (rotation < 90) {
        rotation = rotation + 1
        pins.servoWritePin(AnalogPin.P0, rotation)
        basic.pause(20)
    }
})
input.onButtonPressed(Button.AB, function () {
    rotation = 45
    pins.servoWritePin(AnalogPin.P0, rotation)
})
input.onButtonPressed(Button.B, function () {
    while (rotation > 0) {
        rotation = rotation - 1
        pins.servoWritePin(AnalogPin.P0, rotation)
        basic.pause(20)
    }
})
let rotation = 0
pins.servoWritePin(AnalogPin.P0, 0)
rotation = 0
basic.forever(function () {
	
})
