// The unknown type 
let userInput: unknown;
let userName: string

userInput = 5;
userInput = "Max"

if (typeof userInput === "string") {
    userName = userInput
}
// We can use Never in function cases like this 
function generateError(message: string, code: number): never {
    throw {message: message, statusCode: code}
}

generateError("An error occurred", 404)