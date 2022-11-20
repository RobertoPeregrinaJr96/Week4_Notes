



class Person {
    constructor(name, day, hour, month, year) {
        this.name = name

        this.date = new Date(year, month, day, hour)

    }
    getBirthday() {
        console.log(this.date)
    }
    getAge() {
        const today = new Date()
        console.log(today)
        let age = today.getFullYear() - this.date.getFullYear()
        // console.log(this.date.getFullYear())
        return age
    }

}


class Rob extends Person {
    constructor(name, day, hour, month, year) {
        super(name, day, hour, month, year)
        this.date = new Date(year, month, day, hour)
    }
}

const rob = new Rob("Roberto Peregrina", 10, 03, 07, 1996)
const getAge = rob.getAge.bind(rob)
console.log(getAge())















module.exports = { Person }
