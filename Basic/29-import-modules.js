// Importacion de modulos

import MyClass, { add, PI, name, Circle } from "./28-export-modules.js";

import defaultImport from "./28-export-modules.js";

// Funciones

console.log(add(5,10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importacion por defecto

console.log(defaultImport(5,10) )

// let myClassnew = new defaultImport ()
// myClassnew.func()

// Proyecto modular

// import { MyClass } from "./directory/file.js"

