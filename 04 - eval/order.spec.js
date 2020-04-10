import Order from './order'


describe('Method totalQuantity', () => {

    test('It returns the total quantity of all products', () =>{
        const order = new Order([{ quantity: 2, price: 500 }, { quantity: 1, price: 200 }])
        expect(order.totalQuantity()).toBe(3)
    })

    test('It returns the total quantity of all products', () =>{
        const order = new Order([{ quantity: 5, price: 500 }, { quantity: 4, price: 200 }])
        expect(order.totalQuantity()).toBe(9)
    })

})

describe('Method productsCount', () => {

    test('It returns the number of products', () =>{
        const order = new Order([{ quantity: 2, price: 500 }, { quantity: 1, price: 200 }])
        expect(order.productsCount()).toBe(2)
    })

    test('It returns the number of products', () =>{
        const order = new Order([{ quantity: 2, price: 500 }])
        expect(order.productsCount()).toBe(1)
    })
    
})


describe('Method priceInCents', () => {

    test('It returns the total price of all products ', () =>{
        const order = new Order([{ quantity: 2, price: 500 }, { quantity: 1, price: 200 }])
        expect(order.priceInCents()).toBe(1200)
    })

    test('It returns the total price of all products ', () =>{
        const order = new Order([{ quantity: 2, price: 515 }, { quantity: 1, price: 600 }])
        expect(order.priceInCents()).toBe(1630)
    })
    
})

describe('Method priceInEuros', () => {

    test("It returns the total price with 2 digits after the comma when the modulo of the total price by 100 has no rest ", () =>{

        const order = new Order([{ quantity: 2, price: 500 }, { quantity: 1, price: 200 }])
        expect(order.priceInEuros()).toBe("12,00€")
    })


    test("It returns the total price with 2 digits after the comma when the modulo of the total price by 100 has a rest", () =>{
        
        const order = new Order([{ quantity: 2, price: 545 }, { quantity: 1, price: 432 }])
        expect(order.priceInEuros()).toBe("15,22€")
    })

    test("It returns the total price with 2 digits after the comma when the modulo of the total price by 100 has a rest and 1 digits after the comma", () =>{
        
        const order = new Order([{ quantity: 2, price: 515 }, { quantity: 1, price: 600 }])
        expect(order.priceInEuros()).toBe("16,30€")
    })

    
})