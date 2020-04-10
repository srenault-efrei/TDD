export default class Person {


    constructor(firstname, lastname, age, cash) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.cash = cash
    }


    helloFullName() {
        return `Hello ${this.firstname} ${this.lastname}`
    }

    canDrink() {
        return this.age >= 18
    }

    canBuy(amount) {
        return amount <= this.cash
    }

    buy(amount) {
        if (this.canBuy(amount)) {
            this.cash = this.cash - amount
            return this.cash
        }
        else {
            throw `You can't buy this! You are ${amount - this.cash}€ short!`
        }
    }
}