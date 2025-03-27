let score = "33abc"

//console.log(typeof(score))
//console.log(typeof score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Shruti" => true

let number = 33
let stringnum = String(number)
//console.log(stringnum)
//console.log(typeof stringnum)

let value = 3
let negativevalue = -value

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2); power
//console.log(2/2);
//console.log(2%2);

let str1 = "Hello"
let str2 = " Shruti"
let str3 = str1+str2 
console.log(str3)

//console.log("1"+2); //12
//console.log(1+"2"); //12
//console.log("1"+2+2); //122
//console.log(1+2+"2"); //32

console.log(+true); //1
console.log(+"") //0

let gameCounter=100
gameCounter++
console.log(gameCounter);