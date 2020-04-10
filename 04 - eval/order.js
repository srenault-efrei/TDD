export default class Order {

    constructor(products) {
        this.products = products
    }


    totalQuantity() {
        let totalQuantity = 0
        for (const product of this.products) {
            totalQuantity += product.quantity
        }
        return totalQuantity
    }

    productsCount() {
        return this.products.length
    }

    priceInCents() {
        let priceInCents = 0

        for (const product of this.products) {
            priceInCents += product.quantity * product.price
        }
        return priceInCents
    }

    priceInEuros() {

        let priceInEuros = this.priceInCents()


        if (priceInEuros % 100 === 0) {
            priceInEuros = priceInEuros / 100
            priceInEuros = `${priceInEuros},00€`
        }
        else {
            priceInEuros = priceInEuros / 100
            priceInEuros = String(priceInEuros).replace('.', ',')

            if (priceInEuros.length === 5) {
                priceInEuros = `${priceInEuros}€`
            } else {
                priceInEuros = `${priceInEuros}0€`
            }

        }
        return priceInEuros
    }
}