let keyboard = 249.90
let mouse = 119.90
let headset = 349.90

console.clear()

console.log(`
    Total: USD ${(keyboard + mouse + headset).toFixed(2)}
    Average price per item: USD ${((keyboard + mouse + headset)/3).toFixed(2)}
    If paid 1000, the change is: USD ${(1000.00 - (keyboard + mouse + headset)).toFixed(2)}`)