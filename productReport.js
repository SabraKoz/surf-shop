import { inventory } from "./data.js"

const isSurfboard = (item) => {
    let returnValue = false

    if (item.type === "surfboard") {
        returnValue = true
    }

    return returnValue
}

const isBargain = (inventoryItem) => {
    let returnValue = false

    if (inventoryItem.price < 50.00) {
        returnValue = true
    }

    return returnValue
}

const isClothing = (item) => {
    let returnValue = false

    if (item.type === "clothing") {
        returnValue = true
    }

    return returnValue
}

const isGear = (gear) => {
    let returnValue = false

    if (gear.type === "surfboard") {
        returnValue = true
    }

    return returnValue
}

for (const surfProduct of inventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (isSurfboard(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }

    if (message !== "") {
        console.log(message)
    }
}