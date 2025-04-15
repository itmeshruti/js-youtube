const name = "Shruti"
const repoCount = 50
//console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shruti-hhc')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase()); //but the original value doesnt changes
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newGame = gameName.substring(0, 4)
console.log(newGame);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "   Shruti   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://shruti.com/shruti%20saxena"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));