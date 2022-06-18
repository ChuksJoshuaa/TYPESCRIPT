
abstract class Department {

    static fiscalYear = 2000
    // id: string;
    // name: string;
    // private employees: string[] = []
    protected employees: string[] = []

    constructor(protected readonly id: string,  public name: string) {
    //    this.name = name
    //    this.id = id
    }


    static createEmployee(name: string) {
        return {name: name}
    }

    static myPeople(text: string) {
        if (text === "John") {
            return text
        }
        else {
            throw new Error("This is an error, the value is empty")
        }
    }

    // describe(this: Department) {
    //     console.log(`Department: ${this.id} - ${this.name}` )
    // }

    abstract describe(this: Department): void


    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins
    }

      describe() {
      console.log("ITDepartment id: " + this.id + "-" + this.name)
    }
}


class AccountingDepartment extends Department {
    private lastReport: string;

    private static instance: AccountingDepartment

    get mostRecentReport() { 
        if (this.lastReport) {
             return this.lastReport
        }
       throw new Error("No report found.")
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass a valid value!!!")
        }
        this.addReport(value)
    }

    describe() {
      console.log("AccountingDepartment new id: " + this.id)
    }

   static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
       }
        else {
            this.instance = new AccountingDepartment("D2", ["Oge", "Nia", "Nkiru"], 40)
            return this.instance
       }
    }

    private constructor(id: string, private reports: string[], private num: number) {
        super(id, "Accounting");
        this.lastReport= reports[0]
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }

    getReports() {
        console.log(this.num)
    }

    addEmployee(text: string) {
        if (text === "Max") {
            return
        }

        this.employees.push(text)
    }
}





const accountant = new ITDepartment("D1", ["Joshua", "Vivian", "Tolu"])


const employee = Department.createEmployee("John")

console.log(Department.myPeople("John"))
console.log(employee, Department.fiscalYear)

accountant.addEmployee("Max")
accountant.addEmployee("John")

accountant.describe()
console.log(accountant)
accountant.printEmployeeInformation()

const accounting = AccountingDepartment.getInstance()
console.log(accounting)
accounting.describe()
accounting.addReport("Something went wrong")
accounting.mostRecentReport = "Year end Report"

console.log(accounting.mostRecentReport)


accounting.printReports()

accounting.getReports()
accounting.addEmployee("Max")
console.log(accounting)
