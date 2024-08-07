// Funciones

function myFunc(){
    console.log("Hola, funcion")
}

for (let i = 0; i < 5; i++){
    myFunc()
}

// Con parámetros

function myFuncWithParams (name){
    console.log(`Hola, ${name}`)
}

myFuncWithParams("samuel")

// Funciones anonimas

const myFunc2 = function(name){
    console.log(`Hola, ${name}`)
}

myFunc2("Samuel")

// Arrow function

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc3("Samuel David")

// Parametros

function sum(a,b){
    console.log(a+b)
}

sum(5,10)
sum(5)
sum()

function defaultSum(a = 0, b = 0){
    console.log(a+b)
}

// por defecto

defaultSum()
defaultSum(5)
defaultSum(5,10)
defaultSum(b = 5)

// retorno de valores

function mult(a, b){
    return a * b
}

console.log(mult(5, 10))

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern(){
    console.log("funcion externa")
    function intern(){
        console.log("funcion interna")
    }
    intern()
}

extern()

// Funciones de orden superior

function applyFunc(func, param){ // cuando una funcion recibe otra funciones, necesita un parametro para ejecutar
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superior")

// forEach

myArray = [1,2,3,4]
mySet = new Set(["Samuel", "David", "Sammy", 4, true, "Cepeda"])
myMap = new Map([
    ["name", "Samuel"],
    ["email", "sam.micheaa@gmail.com"],
    ["age", 22]
    
])


myArray.forEach(function(value){
  console.log(value)  
})

myArray.forEach((value) => console.log(value))
mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))