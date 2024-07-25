//array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = ["Samuel", "David", 4, true]
myArray2 = new Array("Samuel", "David", 4, true)

console.log(myArray)
console.log(myArray2)

myArray = new Array(3)
myArray [0] = "Samuel"
myArray [1] = "David"
myArray [2] = "Sammy"

console.log(myArray)

// Metodos comunes

myArray = []

// PUSH y POP

myArray.push("Samuel")
myArray.push("David")
myArray.push("Sammy")
myArray.push(22)

console.log(myArray)

console.log(myArray.pop())//Elimina el ultimo y lo devuelve
myArray.pop

console.log(myArray)

// SHIFT y UNSHIFT

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Samuel", "Sammy")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = [] //--> asi se inicializa a vacio
console.log(myArray)

// slice

myArray = ("Samuel", "David", 4, true)

let myNewArray = myArray

myNewArray.push(37)
myNewArray.slice(1,2)

console.log(myArray)
console.log(myNewArray)

// Splice

myArray = ("Samuel", "David", 4, true)

myArray.splice(1, 2, "Nuevo elemento") // Indica desde que indice se desea eliminar , cuantos elementos se eliminaran, que elemento cubrira ese espacio

console.log(myArray)
