import Person from './person'


describe('Method helloFullName', () => {

    test('It returns Hello to the Person', () => {
        const person = new Person("Steven","Renault", 21, 100)
        expect(person.helloFullName()).toBe("Hello Steven Renault")
    })

})

describe('Method canDrink', () => {

    test("It returns true to a major person ", () => {
        const person = new Person("Loic", "Lambourdiere", 18, 160)
        expect(person.canDrink()).toBe(true)
    })

    test("It returns false to a minor person ", () => {
        const person = new Person("Emilie", "Barjot", 15, 130)
        expect(person.canDrink()).toBe(false)
    })


})

describe('Method canBuy', () => {

    test("It returns true if person can buy with his cash ", () => {
        const person = new Person("Heliote", "Bako", 19, 200)
        expect(person.canBuy(30)).toBe(true)
    })

})


describe('Method buy', () => {

    test("It returns the rest of the cash and decrementes the cash", () => {
        const person = new Person("Annie", "Peca", 17, 100)
        expect(person.buy(30)).toBe(70)
        expect(person.buy(50)).toBe(20)

    })

    test("Exception when you don't have enough cash to buy", () => {
        const person = new Person("Jeremy", "Serber", 25, 100)
        expect(() => { person.buy(300) }).toThrow("You can't buy this! You are 200€ short!")

    })
})



