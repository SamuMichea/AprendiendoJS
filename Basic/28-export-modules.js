// Exportacion de modulos

// Modulo: Es una forma de divir nuestro codigo en piezas que podemos reutilizar, nos permite organizar nuestro codigo en archivos separados

// Funciones

export function add(a,b){
    return a + b
}

console.log(add(5,10))

// Propiedades

export const PI = 3.1416
export let name = "Samuel"

// Clases

export class Circle{

    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter(){
        return 2 * Math.PI * this.radius
    }

}

// Exportacion por defecto (solo se puede tener 1 exportacion por defualt, no se puede exportar cualquier cosa)

// export default function substract(a,b){
//     return a-b
// }

export default class MyClass{
    func(){
        console.log("Mi clase")
    }
}