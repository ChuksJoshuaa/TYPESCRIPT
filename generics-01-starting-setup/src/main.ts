//GENERIC TYPES
let names: Array<string | number> 

names = ["john", 1, "Max", "School"]
const newName = names.push("Job")
console.log(names[0])
console.log(names)

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     let word = ""
//     if (typeof word === "string") {
//           setTimeout(() => {
//         resolve("Put your code here")
//     }, 3000)
//     }
//     reject("This is an error")
// })

// promise.then(data => {
//     data.split(" ")
// })
