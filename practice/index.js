//(require) destructer the object to its name,  *require* imports the information form the path in the parentheses
const { singer } = require(`./classes`)

//(new) we are assigning a new child class *kimbra_Lee* that will inherent the properties of the parent class *singer*
const kimbra_Lee = new singer("Kimbra Lee Johnson", 32, "Hi Def Distance Romance (Reimagined)", "Kimbra")
//console.log(kimbra)


// kimbra is the class object which has the instance method *info* which takes in the object *kimbra*
console.log(kimbra_Lee.info(kimbra_Lee))
//-----------------------------------------------------------------------------
// (extends) we can use *extends* to make our class inheret properties from its parent class
class Amelia_Murray extends singer {
    constructor(name, hitSong, band, placeOfBirth, located) {
        //(super) the *super* keyword allows to grab the properties i want to use from the parent consturctor
        super(name, hitSong, band)
        this.placeOfBirth = placeOfBirth
        this.located = located
    }
    // (polymorphism)  we can inheret the functions from the parent and reassign them however we want
    info() {
        return `${this.name} was born in ${this.placeOfBirth},however later moved to ${this.located} `
    }
}
const Amelia = new Amelia_Murray(
    "Amelia Murray",
    "Break!",
    "Fazerdaze",
    "Wellington New Zealand",
    "Auckland New Zealand")
console.log(Amelia.info())
//console.log(Amelia_Murray)
