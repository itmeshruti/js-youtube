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

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Memory +++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) Heap(Non Primitive)

let myName = "Shruti"
let herName = myName
herName = "Shreya"
console.log(myName)
console.log(herName)

let userOne = {
    email:"user@google.com",
    upi:"user@paytm"
}
let userTwo = userOne
userTwo.email="hitesh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
