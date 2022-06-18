//GENERIC FUNCTIONS

function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB)
} 

const record = merge({ name: "John", school: "Thebest", age: 34}, { title: "Chief" })
console.log(record)



//TYPE CONSTRIANTS

function join<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB)
} 

const recordLabel = join({ name: "John", school: "Thebest", age: 34}, { title: "Doctor" })
console.log(recordLabel)


interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T){
    let descriptionText = "Got no value"
    if (element.length === 1) {
        descriptionText = "Got 1 element."
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements"
    }
    return [element, descriptionText]
}

console.log(countAndDescribe("Hi there! "))


//KEY OF CONSTRIANT
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key]
}


const ext = extractAndConvert({ name: "Max" }, "name")
console.log(ext)



//GENERIC CLASSES

class DataStorage<T extends string | number | boolean | object>{
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item)) {
             return
         }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem("Max")
textStorage.addItem("Joshua")
textStorage.removeItem("Max")

console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
const maxObject = {name: "Max"}
objStorage.addItem(maxObject)
objStorage.addItem({ name: "Joshua" })

objStorage.removeItem(maxObject)

console.log(objStorage.getItems())

//GENERIC UTILITY TYPES


//Partial types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal
}

//Readonly types
const namesGoal: Readonly<string[]>= ["Max", "Sports"]
// namesGoal.push("Manu")

