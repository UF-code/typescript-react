let apples: number = 5
apples = 10

let speed: string = 'fast'
speed = 'slow'

let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// array
// array
// array
let colors: string[] = ['red', 'green', 'blue']

let myNumbers: number[] = [1, 2, 3, 4, 5]

let truths: boolean[] = [true, true, false]

// classes
// classes
// classes
class Car {}

let car: Car = new Car()

// Object literal
// Object literal
// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
}

// Function
// Function
// Function
const logNumber: (i: number) => void = (i) => {
    console.log(i)
}

// when to use annotations
// 1) function that returns the 'any' type
const json = '{ "x": 10, "y": 20 }'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
