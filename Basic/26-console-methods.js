// Console

// log

console.log("Hola, JavaScript!")

// error

console.error("Este es un mensaje de error (pone el msj en rojo)")
console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida"))

// warn

console.warn("Este es un mensaje de advertencia (pone el msj en amarrillo)")

// info

console.info("Este es un mensaje de informacion adicional")

// table

let data = [
    ["Samuel", 22],
    ["David", 26]
]

console.table(data)

data = [
    {name: "Samuel" , age: 22},
    {name: "David" , age: 26},
]

console.table(data)

// group 

console.group("Usuario:")
console.log("Nombre: Samuel")
console.log("Edad: 22")
console.groupEnd()

console.log("kakakaka")

// time

// se le tiene que dar el mismo nombre del bloque de ejecucion para q sepa donde esta midiendo

console.time("Tiempo de ejecucion 1")

for (let i = 0; i<10000; i++){
    
}

console.time("Tiempo de ejecucion 2")
 
for (let i = 0; i<10000; i++){
    
}

console.timeEnd("Tiempo de ejecucion 1")

for (let i = 0; i<10000; i++){
    
}

console.timeEnd("Tiempo de ejecucion 2")


// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

// trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de ejecucion")
}

funcA()

// clera

//console.clear()