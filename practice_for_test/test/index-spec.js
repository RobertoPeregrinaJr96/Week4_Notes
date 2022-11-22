const { expect } = require('chai');

const {Person,Rob} = require(`../index`);


describe('getBirthday()', () => {

    let rob;

    beforeEach(() => {
        rob = new Rob("Roberto Peregrina", 10, 03, 07, 1996)

    })
    it("when's the birth of Robert", () => {
        expect(rob.getBirthday()).to.be.equal("Sat Aug 10 1996")
    })
})
