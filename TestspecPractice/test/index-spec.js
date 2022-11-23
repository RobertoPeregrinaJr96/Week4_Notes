const { expect } = require('chai');

const { Person, Rob } = require(`../index`);


describe('Rob class', () => {

    let rob;

    beforeEach(() => {
        rob = new Rob("Roberto Peregrina", 10, 08, 1996, ["driver license"], "somewhere")

    })
    it("when's the birth of Robert", () => {
        expect(rob.getBirthday()).to.be.equal("Sat Aug 10 1996")
    })
    it('What Age is Robert', () => {
        expect(rob.getAge()).to.be.equal(26)
    })
    it("where are you moving to", () => {
        expect(rob.moving(this.location)).to.be.equal("somewhere")
    })
})
