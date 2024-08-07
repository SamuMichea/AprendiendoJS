// Loops o bucles

// for

for (let i = 0; i < 5; i++){
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++){
    console.log(`elemento ${numbers[i]}`)
}


// while

let i = 0

while (i < 5){
    console.log(`hola ${i}`)
    i++
}

// do while

i = 6
do {
    console.log(`hola ${i}`)
    i++
} while(i < 5)

// for of

myArray = [1,2,3,4]
mySet = new Set(["Samuel", "David", "Sammy", 4, true, "Cepeda"])
myMap = new Map([
    ["name", "Samuel"],
    ["email", "sam.micheaa@gmail.com"],
    ["age", 22]
    
])

myString = "Hola, JavaScript!"

for (let value of myArray){
    console.log(value)
}
for (let value of mySet){
    console.log(value)
}
for (let value of myMap){
    console.log(value)
}
for (let value of myString){
    console.log(value)
}

// Buenas Practicas

// break y continue

for (let i = 0; i < 10; i++){
    if (i == 5){
        continue 
    } else if (i == 7){
        break
    }
    
    console.log(`hola ${i}`)
}
