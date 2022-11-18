//(class) by using the *class* keyword I can initalize a new class object
class singer {
    //(constructor) the *constructor* keyword allows me to utilize the *new* keyword to creat new class instance that will inherent everything in the constructor curly braces
    constructor(name, age, hitSong, band) {
        //(this) the this keyword allows the us to use the object properties
        this.name = name,
            this.age = age,
            this.hitSong = hitSong,
            this.band = band
    }
    //(instance Method) having a function within the class in the *class* curly braces makes this into a instance method
    info(obj) {
        return `${obj.name}, who is ${obj.age} years old is the lead singer of the band ${obj.band}. Currently ${obj.band} has the hit single ${obj.hitSong} making waves on the internet`
    }
}

class VenueShows {
    constructor(hitSong, band, from, arePlaying, hasMerch, soldOut, Drinks,) {
        this.hitSong = hitSong
        this.band = band
        this.from = from
        this.arePlaying = arePlaying
        this.hasMerch = hasMerch
        this.soldOut = soldOut
        this.Drinks = Drinks
    }
}

class PrivatShow {
    constructor(event, band, album, opener, payout, location) {
        this.event = event;
        this.band = band;
        this.album = opener;
        this.payout = payout;
        this.locationInTheStates = location;
    }

    priceForShow() {
        if(!(this.locationInTheStates) || !(this.event)) return `NO Event No Show`
        if (this.locationInTheStates === false && this.event) {
            this.payout *= 2
            return this.payout
        } else if (this.locationInTheStates === true && this.event === "corporate event") {
            this.payout *= 2.7;
            return this.payout
        } else if (this.event === "charity gala") {
            this.payout *= 0;
            return this.payout
        }

    }
}

//(module.exports) we use module.exports to send our code to another file/module
module.exports = { singer, VenueShows, PrivatShow };
