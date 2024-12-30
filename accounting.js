import { inventory } from "./data.js"

const convertDataForAccounting = (inventory) => {
    let allUpperCase = ""

    for (const item of inventory) {
        allUpperCase += `${item.description.toUpperCase()} - ${item.type.toUpperCase()} - ${item.price} \n`
    }
    
    return allUpperCase
}

const modifiedData = convertDataForAccounting(inventory)
console.log(modifiedData)