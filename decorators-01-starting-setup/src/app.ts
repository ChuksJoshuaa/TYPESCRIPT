//FIRST CLASS DECORATOR


function Logger(logString: string) {
    return function(constructor: Function){
      console.log(logString)
      console.log(constructor)
    } 
}


//We use the _ to tell typescript that the constructor is not needed
function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML = template
        }
    }
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>This life i must make it as a developer</h1>", "app")
class Person {
    name = "Max";

    constructor() {
        console.log("Creating person object...")
    }
}

const pers = new Person()

console.log(pers)