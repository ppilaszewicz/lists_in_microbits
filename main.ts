input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= array.length - 1; index++) {
        basic.clearScreen()
        basic.pause(200)
        basic.showNumber(array[index])
    }
})
input.onButtonPressed(Button.B, function () {
    array.push(number)
})
let array: number[] = []
let number = 0
number = 0
array = []
basic.forever(function () {
	
})
