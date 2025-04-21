const Arr = [1,2,3,4,5]
const names = ["Shruti", "Shreya", "Sakshi"]
const Arr2 = new Array(1,2,3,4)
//console.log(Arr[1]);

//Arr.push(6)
//Arr.push(7)
//Arr.pop()

//Arr.unshift(9)
//Arr.shift()
//console.log(Arr.includes(9));
//console.log(Arr.indexOf(3));
const newArr = Arr.join(); 
//console.log(Arr);
//console.log(newArr);
//console.log(typeof newArr);

//slice, splice

console.log("A ",Arr);
const myn1 = Arr.slice(1, 3);
console.log(myn1);
console.log("B ",Arr);
const myn2 = Arr.splice(1, 3);
console.log("C ", Arr);
console.log(myn2);