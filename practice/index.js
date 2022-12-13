//(require) destructor the object to its name, *require* imports the information form the path in the parentheses
const { singer, VenueShows, PrivateShow } = require(`./classes`)

console.log( Object.getOwnPropertyNames(singer))
console.log(singer.length)
console.log(singer.name)
console.log(singer.prototype)

//(new) we are assigning a new child class *kimbra_Lee* that will inherent the properties of the parent class *singer*
const kimbra_Lee = new singer("Kimbra Lee Johnson", 32, "Hi Def Distance Romance (Reimagined)", "Kimbra")
//console.log(kimbra)


// kimbra is the class object which has the instance method *info* which takes in the object *kimbra*
// console.log(kimbra_Lee.info(kimbra_Lee))
//-----------------------------------------------------------------------------
// (extends) we can use *extends* to make our class inherent properties from its parent class
class Amelia_Murray extends singer {
    constructor(name, hitSong, band, placeOfBirth, located) {
        //(super) the *super* keyword allows to grab the properties i want to use from the parent constructor
        super(name, hitSong, band)
        this.band = band
        this.placeOfBirth = placeOfBirth
        this.located = located
    }
    // (polymorphism)  we can inherent the functions from the parent and reassign them however we want
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
// console.log(Amelia.info())
//console.log(Amelia_Murray)
//console.log(Amelia.band)

//-----------------------------------------------------------------------------
//(this.) the *this* keyword points to the current object it is being executed at (like picking a fruit from a fruit basket is not the same as picking fruit from a tree,even though both are picking fruit the *context* matters)
class SecretePerformance extends singer {
    constructor(hitSong, band, from, arePlaying, hasMerch) {
        super(hitSong, band)
        this.band = band
        this.from = from
        this.arePlaying = arePlaying
        this.hasMerch = hasMerch
    }

    sellingMerch() {
        if (this.merch >= 1 || this.arePlaying === true) {
            this.merch -= 1
            this.arePlaying = false
            return `${this.band} is preforming and selling merch there`
        } else {
            return `${this.band} are not preforming and ran out of merch at their last show sorry`
        }
    }

    addMoreMerch(...nums) {
        let total = nums.forEach(n => this.hasMerch += n)
        return total
    }
}

const Kalush = new SecretePerformance(
    "Stefania",
    "Kalush Orchestra",
    "Ukraine",
    true,
    1
)

// console.log(Kalush.sellingMerch())
// console.log(Kalush.sellingMerch())
// console.log(Kalush.hasMerch)
Kalush.addMoreMerch(10)
// console.log(Kalush.hasMerch)
// we assign (sellingMerch) with method styling invocation with Kalush(our context) . sellingMerch(our function)
let sellingMerch = Kalush.sellingMerch
let areThereMerchAtTheSecretShow = sellingMerch.bind(Kalush)
//console.log(areThereMerchAtTheSecretShow())

//------------------------------------------------------------------------------
const TheFondaTheater = new VenueShows(
    "Angry Too",
    "Lola Blanc",
    "Augsburg,Germany",
    true,
    100,
    "Limited Tickets Available",
    "There will be a ID check for drinks",
)

//(bind) we can assign a function that belonged to a different class and *bind* it to this class to use
let merchAtTheVenue = Kalush.sellingMerch
let areThereMerchBeingSoldAtTheVenue = merchAtTheVenue.bind(TheFondaTheater)
//console.log(areThereMerchBeingSoldAtTheVenue())

//(call) we can use function from different classes by directly invoking them with the .call method(remember that C in call is for comma)
// console.log(TheFondaTheater.hasMerch)
Kalush.addMoreMerch.call(TheFondaTheater, 200, 100, 350)
// or
//(apply) we can use the .apply method that works the same as the .call method but sends a array (remember that A in apply is for array)
Kalush.addMoreMerch.apply(TheFondaTheater, [50, 100, 500])
// console.log(TheFondaTheater.hasMerch)


module.exports = { SecretePerformance, TheFondaTheater, Kalush, Amelia, kimbra_Lee, singer, VenueShows, PrivateShow }
