// Objects

// sintaxis

let person = {
    name: "Samuel",
    age: 22, 
    alias: "Sammy"
}

// Acceso a propiedades

// Notacion punto

console.log(person.name)

// Notacion de corchetes

console.log(person["name"])

// Modificacion de propiedades

person.name = "Samuel Michea"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "Sam.micheaa@gmail.com"
console.log(person)

person["age"] = 22
console.log(person)

// Metodos (funciones)

let person2 = {
    name: "Samuel",
    age: 22, 
    alias: "Sammy",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

// Anidacion de objects

let person3 = {
    name: "Samuel",
    age: 22, 
    alias: "Sammy",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work:  function(){
            console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objects

let person4 = {
    name: "Samuel Michea",
    age: 22, 
    alias: "Sammy",
    email: "Sam.micheaa@gmail.com"
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteracion

for (let key in person4){
    console.log(key + ":" + person4[key])
}

// Funciones como objects

function Person(name, age){ // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Samuel", 22)
console.log(person5)

console.log(typeof person5)
console.log(typeof person4)