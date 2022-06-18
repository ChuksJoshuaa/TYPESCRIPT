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
//When we use readonly we can not set append it after it has been called initially like 
//in this case user1.name = Nkiru can not work if i set the name to readonly
// user1.name = "Nkiru"
user1.greet("Hi there my name is")
console.log(user1)

//Note Interface is a typescript function and it is not known in vanilla javascript. Also it will compile the interface to class in the js file
