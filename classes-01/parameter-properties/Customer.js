"use strict";
class Customer1 {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer1("İlker", "Yelekçioğlu");
myCustomer.firstName = "İlker";
myCustomer.lastName = "Yelekçioğlu";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);