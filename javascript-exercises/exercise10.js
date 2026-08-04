let clientCategory = "Platinum"
let priceInReais = 850

console.clear()

switch (clientCategory){
    case "Bronze":
        console.log(`
            Client category: ${clientCategory}
            Discount percentage: 5%
            Discount value: ${(priceInReais / 100) * 5 }
            Total: ${priceInReais - (priceInReais / 100 * 5)}`)
            break
    case "Silver":
        console.log(`
            Client category: ${clientCategory}
            Discount percentage: 10%
            Discount value: ${(priceInReais / 100) * 10 }
            Total: ${priceInReais - (priceInReais / 100 * 10)}`)
            break
    case "Gold":
        console.log(`
            Client category: ${clientCategory}
            Discount percentage: 15%
            Discount value: ${(priceInReais / 100) * 15 }
            Total: ${priceInReais - (priceInReais / 100 * 15)}`)
            break
    case "Platinum":
        console.log(`
            Client category: ${clientCategory}
            Discount percentage: 20%
            Discount value: ${(priceInReais / 100) * 20 }
            Total: ${priceInReais - (priceInReais / 100 * 20)}`)
            break
    default:
        console.log("Invalid category")
}