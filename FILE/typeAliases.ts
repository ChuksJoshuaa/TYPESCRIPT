// Note we use this style to write lesser code and ensure there is no error and also make sure when using type the next word should be a random
// name, do not use something that is similar to typescript and javascript


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