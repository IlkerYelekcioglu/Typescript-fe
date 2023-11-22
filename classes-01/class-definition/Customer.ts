class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

let myCustomer = new Customer("İlker", "Yelekçioğlu");

myCustomer.firstName = "İlker";
myCustomer.lastName = "Yelekçioğlu";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
