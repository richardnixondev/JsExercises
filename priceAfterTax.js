function getPriceAfterTax(price, tax){
    return finalPrice = price + (price * tax / 100)
}

const label = getPriceAfterTax(300, 21);

console.log(label)