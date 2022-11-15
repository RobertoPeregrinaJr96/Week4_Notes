// by using the *class* keyword I can initalize a new class object
class singer {
    // the *constructor* keyword allows me to utilize the *new* keyword to creat new class instance that will inherent everything in the constructor curly braces
    constructor(name, age, hitSong, band) {
        // the this keyword allows the us to use the object properties
        this.name = name,
            this.age = age,
            this.hitSong = hitSong,
            this.band = band
    }
    // having a function within the class in the *class* curly braces makes this into a instance method
    info(obj) {
        return `${obj.name}, who is ${obj.age} years old is the lead singer of the band ${obj.band}. Currently ${obj.band} has the hit single ${obj.hitSong} making waves on the internet`
    }
}

module.exports = { singer };
