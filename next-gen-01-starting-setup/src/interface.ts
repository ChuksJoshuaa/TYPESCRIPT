// type AddFn =  (a: number, b: number) => number

interface AddFn {
    (a: number, b: number): number
}

let sum: AddFn;

sum = (n1: number, n2: number) => {
   return n1 + n2
}

console.log(sum(4, 6))

interface Named {
    readonly name: string
}

class myCuteName implements Named {
    name: string

    constructor(n: string) {
        this.name = n
    }
}

const cutee = new myCuteName("John")
console.log(cutee)


interface Greatable {
    readonly name: string
    age: number

    greet(phrase: string): void
}

class Person implements Greatable {
    name: string
    age: number

    constructor(n: string, age: number) {
        this.name = n
        this.age = age
    }

     greet(phrase: string) {
        console.log(`${phrase} ${this.name} and I am ${this.age} years old`)
    }
}

let user1: Greatable

user1 = new Person("Max", 45)
user1.greet("Hi there my name is")
console.log(user1)
