const name = "Praveen" // string is the object in JS which is a key:Value pair
const userName = new String("Kirmada"); 
const cgpa = 7.8

//console.log(`My name is ${name} and My CGPA is ${cgpa}`);

//console.log(name[0]); // 0:P , here 0 is the key and its corresponding value is P here 

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// console.log(userName.toUpperCase());
// console.log(userName.charAt(3)); 

// console.log(userName.indexOf('a'));
// console.log(userName.lastIndexOf('a'));

// const newString = userName.substring(0,4); //start from 0 and add 4 continous characters including 0th character
// console.log(newString); // Kirm

// const newString2 = userName.slice(0,4); // start from 0 and add 4 continous characters including 0th character
// console.log(newString2); // Kirm

// const newString3 = userName.slice(1,4); // 1st index se (4-1)th index tk
// console.log(newString3); // irm
 
// const newString4 = userName.slice(-6,4);//start counting from reverse 6 then from last reached step to (4-1)th index 
// console.log(newString4); // irm

// const url = "https://bug-free-fiesta-q7457959r456cxp5r.github.dev/";
// console.log(url);


// const url2 = url.replace('bug', 'hug')
// console.log(url2);

// split 
const str = "The quick brown fox";
const words = str.split(" "); 
console.log(words);

// ["The", "quick", "brown", "fox"]

const str1 = "Hello";
const chars = str1.split(""); 
// ["H", "e", "l", "l", "o"]
console.log(chars);