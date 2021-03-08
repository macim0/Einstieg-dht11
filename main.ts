DHT11.setPin(DigitalPin.C16)
basic.forever(function () {
    basic.showString("" + DHT11.humidity() + "%")
    basic.showString("" + DHT11.temperature() + "C")
})
