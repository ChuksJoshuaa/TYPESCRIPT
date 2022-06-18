//INTERSECTION TYPES
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable | Numeric


type Admin = {
    name: Combinable
    priviledge: string[]
    fact: Numeric
}

type Employee = {
     name: Combinable
     fullYear: Combinable
     StartDate: Date
}

type ElevatedEmployee = Admin & Employee

const elect: ElevatedEmployee = {
    name: "John",
    priviledge: ["Obey", "John", "Kemi"],
    fullYear: new Date().getFullYear(),
    StartDate: new Date(),
    fact: true,
}
const yes = elect.priviledge.push("Messi")
console.log(elect.name, elect.fullYear, elect.priviledge, elect.fact)


//WE CAN USE THE INTERSECT TYPE


// interface Admin {
//     name: string
//     priviledge: string[]
// }

// interface Employee {
//     name: string
//     StartDate: Date
// }


// interface ElevatedEmployee extends Admin, Employee {
//     name: string
//     StartDate: Date
//     priviledge: string[]
// }

// TYPE GUARDS
function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() +" "+ b.toString()
    }
    return a + b
}
console.log(add("John", "Max"))


type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {

    if ("name" in emp && "fact" in emp) {
         console.log(`Name is ${emp.name} and All my fact are ${emp.fact}`)
    }

    if ("priviledge" in emp) {
        console.log("priviledge" + ": " + emp.priviledge)
    }
    if ("fullYear" in emp) {
        console.log("fullYear" + ": " + emp.fullYear )
    }
    if ("StartDate" in emp) {
        console.log("StartDate" + ": " + emp.StartDate )
    }
}

printEmployeeInformation(elect)


//DISCRIMINATED UNIONS UNDER TYPE GUARD
class Car {
    drive() {
        console.log("Driving a mini car...")
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...")
    }

    loadCargo(amount: number) {
        console.log("Loading cargo..." + amount)
    }
}

type Vehicle = Car | Truck


const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(3000)
    }
}


useVehicle(v1)
useVehicle(v2)


interface Bird {
    type: "bird"
    flyingSpeed: number
}

interface Horse {
    type: "horse"
    runningSpeed: number
}

type Animal = Horse | Bird

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed
            break
            
        case "horse":
            speed = animal.runningSpeed
            break
    }

    console.log("I am running at a speed of" + " " + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 10 })

// const userInputElement = document.querySelector("#user-input")! as HTMLInputElement;

// userInputElement.value = "Hi there"

// YOU CAN ALSO WRITE THIS IN THIS FORMAT
//TYPE CASTING
const userInputElement = document.querySelector("#user-input")

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hi there"
}

const buttEl = document.querySelector(".butt")! as HTMLButtonElement

buttEl.addEventListener("click", function () {
    let value
    if (  buttEl.innerHTML === "yes") {
        value = buttEl.innerHTML = "no"
        return value
    }
    value = buttEl.innerHTML = "yes"
    return value
})

//INDEX PROPERTIES
//We use the index type prop to add many stuff and setting to whatever we like
interface ErrorContainer {
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: "chuks@gmail.com",
    username: "Must start with a capital character"
}

console.log(errorBag.email)

const nameInput = document.querySelector(".text-input")! as HTMLInputElement

nameInput.value = errorBag.email


//FUNCTION OVERLOADS
function myAdd(a: number, b: number): number
function myAdd(a: string, b: string): string
function myAdd(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString()
    }
    return a + b
}

let wordy = myAdd("Max", "John")
wordy.split(" ")
console.log(wordy)


// OPTIONAL CHAINING
const fetchedUserData = {
    id: 1,
    name: "Max",
    job: {id: 1, name: "John", title: "Teacher"}
}

let resultData;

resultData = fetchedUserData?.job?.title
console.log(resultData)


//NULLISH COALESCING
const userInput = null
const userValue = ""

const storedData = userInput ?? "DEFAULT"
const storedValue = userValue ?? "DEFAULT"
console.log(storedData)
//Note an empty value will be logged in the console
console.log(storedValue)