class Person {
    constructor(name, day, month, year) {
        this.name = name
        this.date = new Date(year, (month - 1), day,)
    }
    getBirthday() {
        return this.date.toDateString()
    }
    getAge() {
        const today = new Date()
        let age = today.getFullYear() - this.date.getFullYear()
        return age
    }

}


class Rob extends Person {
    constructor(name, day, month, year, license, location) {
        super(name, day, (month - 1), year);
        this.date = new Date(year, (month - 1), day,);
        this.license = license;
        this.location = location;
    }
    moving(location) {
        if (location) {
            this.location = location
        }
        return this.location
    }
}

const rob = new Rob("Roberto Peregrina", 10, 08, 1996, ["driver license"], "Bakersfield,California")

const getBirthday = rob.getBirthday.bind(rob)
console.log(getBirthday())

const getAge = rob.getAge.bind(rob)
console.log(getAge())

const moving = rob.moving.bind(rob)
console.log(moving("somewhere"))
// console.log(rob.location)


module.exports = { Person, Rob }
