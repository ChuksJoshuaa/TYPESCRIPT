

function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(word: number): void {
    console.log("Result:" + " " + word)

}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(add(10, 14))

let combineValues: (a: number, b: number) => number
combineValues = add;

console.log(combineValues(10, 20))

addAndHandle(20, 20, (result) => console.log(result))
