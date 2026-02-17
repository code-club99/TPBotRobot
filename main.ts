radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 100)
    } else if (receivedNumber == 1) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Right, 100)
    } else if (receivedNumber == 2) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 100)
    } else if (receivedNumber == 3) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 100)
    } else {
        TPBot.stopCar()
    }
})
radio.setGroup(1)
basic.showString("Robot")
