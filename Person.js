export class Person {
    constructor(firstname, lastname, email) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email;
    }

    getName() {
        return this.firstname + " " + this.lastname
    }
}