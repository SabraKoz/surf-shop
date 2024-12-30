import { inventory } from "./data.js"

const calculateAveragePrice = (products) => {
    let totalPrice = 0

    for (const product of products) {
        totalPrice += product.price
    }

    const averagePrice = totalPrice / products.length

    return averagePrice
}

const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice)

