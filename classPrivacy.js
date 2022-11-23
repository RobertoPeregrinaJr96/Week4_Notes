console.log("_ naming convention for privacy")
class Media {
    constructor(media, title, isCheckedOut, ratings) {
        this._media = media;
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
}

const Book = new Media('book','What is Privacy',)

Book.title = "New Title"
console.log(Book.title) // What is Privacy

Book.isCheckedOut = true
console.log(Book.isCheckedOut) // false
//  console.log("# naming convention for privacy")
// class Media {
//     #media
//     #title
//     #isCheckedOut
//     #ratings
//     constructor(media, title, isCheckedOut = false, ratings = []) {
//         this.#media = media;
//         this.#title = title;
//         this.#isCheckedOut = isCheckedOut;
//         this.#ratings = ratings;
//     }
//     get title() {
//         return this.#title;
//     }
//     get isCheckedOut() {
//         return this.#isCheckedOut;
//     }
//     get ratings() {
//         return this.#ratings;
//     }
// }


// const Book = new Media('book','What is Privacy',)

// Book.title = "New Title"
// console.log(Book.title) // What is Privacy

// Book.isCheckedOut = true
// console.log(Book.isCheckedOut) // false
