// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const str = "Shruti"
const num = 100.3
const isLoggedIn = false
const arr = null
let parNum; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNum = 747397284983n

// Reference(Non Primitive)

// Arrays, Objects, Functions

const fruits = ["apple", "grapes", "banana"];
let myObj = {
    name:"Shruti",
    age:21,
}
const myFunc = function(){
    console.log("Hello World");
}
