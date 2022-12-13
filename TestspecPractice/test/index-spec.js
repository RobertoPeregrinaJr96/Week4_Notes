const { expect } = require('chai');

const { Person, Rob } = require(`../index`);


describe('Rob class', () => {

    let rob;

    beforeEach(() => {
        rob = new Rob("Roberto Peregrina", 10, 08, 1996, ["driver license"], "Bay Area")

    })
    it("when's the birth of Robert", () => {
        expect(rob.getBirthday()).to.be.not.equal(undefined)
    })
    it('What Age is Robert', () => {
        expect(rob.getAge()).to.be.not.equal(undefined)
    })
    it("where are you moving to", () => {
        expect(rob.moving(this.location)).to.be.not.equal(undefined)
    })
})
