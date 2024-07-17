// Strings

// Concatenacion

let myName = "Samuel"
let greeting = "Hola, " + myName + "!"

console.log (greeting)
console.log (typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

// Metodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Samuel"))
console.log(greeting.indexOf("Padre")) //-1 es que no encontro el elemento
console.log(greeting.includes("Samuel"))
console.log(greeting.includes("David")) // false es que no inclue la palabra
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Samuel", "David"))

// Template literals (plantillas literales)

let message = `hola, este
es mi
curso de 
JavaScript`

console.log(message)

let email = "Sam.micheaa@gmail.com"

console.log(`hola, ${myName}!, tu email es ${email}`)