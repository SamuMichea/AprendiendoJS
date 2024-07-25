// set

// Declaracion

let mySet = new Set()
//let mySet2 = {} ---> Esto NO es un SET vacio
console.log(mySet)

//Inicializacion

mySet = new Set(["Samuel", "David", "Sammy", 4, true, "Cepeda"]) // Debe llevar corchetes para asignarle elementos

console.log (mySet)

// METODOS COMUNES

// add y delete

mySet.add("ungatitofeliz")

console.log(mySet)

mySet.delete("ungatitofeliz") // Al delete, se le debe indicar que valor ESPECIFICAMENTE se desea eliminar

console.log(mySet)

console.log(mySet.delete("Samuel"))
console.log(mySet.delete(22))

console.log(mySet)

// has

console.log(mySet.has("Samuel"))
console.log(mySet.has("David"))

// Size

console.log(mySet.size)

// Convertir un Set a un Array

let myArray = new Array(mySet)
console.log(myArray)

// Convertir un Array a Set

mySet = new Set(myArray)
console.log(myArray)

// No admite duplicados

mySet.add("ungatitofeliz")
mySet.add("ungatitofeliz")
mySet.add("ungatitofeliz")

console.log(mySet)