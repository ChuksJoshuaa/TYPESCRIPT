// type Admin = {
//     name: string
//     priviledge: string[]
// }

// type Employee = {
//     name: string
//     StartDate: Date
// }

// type ElevatedEmployee = Admin & Employee

// const elect = {
//     name: "John",
//     priviledge: ["Obey", "John", "Kemi"],
//     StartDate: new Date().getFullYear()
// }

// console.log(elect.name, elect.StartDate)

//WE CAN USE THE INTERSECT TYPE


interface Admin {
    name: string
    priviledge: string[]
}

interface Employee {
    name: string
    StartDate: Date
}


interface ElevatedEmployee extends Admin, Employee {
    name: string
    StartDate: Date
    priviledge: string[]
}