const Mocha = require(`mocha`)
const Chai = require(`chai`);

const { Person } = require(`./test`);
const { expect } = require("chai");

describe("getBirthday()", () => {
    it("what is the date of your birthday", () => {
        const rob = new Person(true, false, 10, 03, 08, 1996)

        const getBirthday = rob.getBirthday()

        expect(getBirthday()).to.be.eqls("Sat Aug 10 1996")
    })
    it("getAge()",()=>{
        const rob = new Person(true, false, 10, 03, 08, 1996)
        const today = new Date()

        let age = today.getFullYear() - this.date.getFullYear()

        expect(age).to.be.eqls(26)
    })
})
