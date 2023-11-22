var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("İlker", "Yelekçioğlu");
myCustomer.firstName = "İlker";
myCustomer.lastName = "Yelekçioğlu";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
