const add = (a: number, b: number) => a + b

// const printResult: (a: number | string) =>  = output => console.log(output)


const printResult = (a: number | string) => console.log(a)
const button = document.querySelector("button")

if (button) {
    button.addEventListener("click", event => console.log(event))
}

printResult(add(4, 10))


let myName: string
let myAge: number
let myArray: string
let mySchool: string 

const jointResult = [
    {
    myName: "John",
    myAge: 14,
    myArray: "Ade",
    mySchool: "Jocarine"
    },

    {
    myName: "John",
    myAge: 14,
    myArray: "Ade",
    mySchool: "Jocarine"
    },

    {
    myName: "John",
    myAge: 14,
    myArray: "Ade",
    mySchool: "Jocarine"
    },

    {
    myName: "John",
    myAge: 14,
    myArray: "Ade",
    mySchool: "Jocarine"
    }

]




const newJointResult = [{ ...jointResult,  
    myName: "John",
    myAge: 14,
    myArray: "Ade",
    mySchool: "Jocarine"
}]
console.log(newJointResult)


//We use the reduce function to perform certain function like addition, substraction e.t.c
const addNumber = (...numbers: number[]) => {
    return numbers.reduce((item, index) => {
        return item + index
    })
}

const addedNumber = addNumber(2, 3, 4, 5, 6, 7);
console.log(addedNumber)