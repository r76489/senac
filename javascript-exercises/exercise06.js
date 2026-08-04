let subscribed = true
let age = 45

console.clear()

if (age >18 && subscribed === true){
    console.log("Acess granted")
} else {
    console.log("Acess denied")
}

/* subscribed false e > 18 = denied
subscribed true e >18 = granted
subscribed true e <18 = denied
*/