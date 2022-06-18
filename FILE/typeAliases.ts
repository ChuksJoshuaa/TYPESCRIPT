
type Combinable = number | string
type ConversionDescription = "as-test" | "as-string"

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescription ) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-test") {
        result = +input1 + +input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}


const combineWorld = combine(300, 200, "as-test")
console.log(combineWorld)


const combineWords = combine("Max", "Joshua", "as-string")
console.log(combineWords)
