input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    servos.P2.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    servos.P2.setAngle(80)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        servos.P2.setAngle(20)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        servos.P2.setAngle(130)
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        servos.P2.setAngle(20)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        servos.P2.setAngle(130)
    }
})
