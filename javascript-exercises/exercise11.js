let nameOfProduct = "Yamaha keyboard"
let price =  773.76
let quantity = 3
let totalPrice = price * quantity
let overPriced 

console.clear()

if (totalPrice > 5000){
    overPriced = true
} else {
    overPriced = false
}

console.log(`
    Product name: ${nameOfProduct}
    Unitary price: ${price}
    Quantity: ${quantity}
    Total: ${totalPrice}
    Over the limit of 5.000: ${overPriced}`)