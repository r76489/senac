let age = "22"
let salary = "2850.50"
let children = "1"

console.clear()

console.log(`
    Age(before): ${age} | Type: ${typeof age}
    Age(after): ${age}  | Type: ${typeof Number(age)}
    Salary(before): ${salary} | Type: ${typeof salary}
    Salary(after): ${salary}  | Type: ${typeof Number(salary)}
    Children(before): ${children} |Type: ${typeof children}
    Children(after): ${children}  | Type: ${typeof Number(children)}`)