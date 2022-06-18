function add(n1: number, n2: number, showResult: boolean, result: string) {
   
     
    if (showResult) {
        let aside = `Result is: ${n1 + n2}`
        console.log(aside)
   }
    return n1 + n2
}

const number1 = 5
const number2 = 2.8
const printResult = true

const paper = "Result is: "
add(number1, number2, printResult, paper)

