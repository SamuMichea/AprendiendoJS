// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "Samuel"],
    ["email", "sam.micheaa@gmail.com"],
    ["age", 22]
    
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set("alias", "sammy")
myMap.set("name", "Samuel Michea") // si la clave(key) existe actualiza el valor, si la clave no existe lo añade

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// Keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear(myMap)
console.log(myMap)                                     