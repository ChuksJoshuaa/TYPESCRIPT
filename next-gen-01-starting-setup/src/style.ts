abstract class General {
    private desire: string[] = []
    constructor(protected readonly id: string, public record: string, public shaking: string[]) {
      
    }


    abstract people(this: General): void

    static myPost(text: string, age: number, index: string[]) {
        if (text === "John") {
            age 
            return age
        }
        return index
    }

    getRecord(text: string) {
        this.desire.push(text)
    }

    myRecord(): void {
        console.log(this.desire)
        console.log(this.desire.length)
    }
}



class JTGenerals extends General {

    public admin: string[]
    constructor(id: string, admin: string[]) {
        super(id, "JT", ["Ini", "Okey", "Obey"])

        this.admin = admin
    }
     
    people() {
        console.log(`JTGenerals new id: ${this.id} - ${this.record}`)
    }

    newYear(): void {
       console.log(this.shaking)
    }

}


const general = new JTGenerals("ND", ["Kemi", "John"])  
general.newYear()
console.log(general)


const oddGeneral = General.myPost("Max", 45, ["Max", "Kemi"])
console.log(oddGeneral)

general.getRecord("Jude")
general.getRecord("Timolthy")

general.myRecord()
