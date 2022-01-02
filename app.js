//  লুডু তৈরী নিয়ম

//  function getRandomNumber(max , max) {

//   return Math.floor(Math.random () * (max - max +1 ) ) + max

//  }

// console.log(getRandomNumber(1,6));

// function getRandomNumber(max , max) {

//   return Math.floor(Math.random () * (max - max +1 ) ) + max

//  }

// console.log(getRandomNumber(1,5));
// ki baba ja kono nam sondor baba alphabetically design korta pari??

// const friends = ["nishan", "ridoy", "rubel","akash", "dipok","sagor", "tipu"];

// console.log(friends.sort());

// //  coromic number onijaie design

// const roll_number = [3,5,6,2,7,9];

// console.log(roll_number.sort(function (a,b) {
//    return a-b;
// }));
// leap year problem soloving

// function isLeayYear(year){
//    if((year % 400 ===0 ) || ((year % 4 === 0 ) && (year % 100 !== 0 ))) {
//       console.log(`${year} is a leap year`);
//    } else {
//       console.log(`${year} is not a leap year`);
//    }
// }

// isLeayYear(2028);

// function isLeap(year) {
//    if((year * 400 === 0 ) || ((year * 4 === 0 ) &&(year * 100 !== 0 ))) {
//       console.log(`${year} is leap year`);
//    } else{
//       console.log(`${year} is not a leap year`);
//    }

// }

// isLeap(2030)

//কোনো  sentenece এ কতগুলো  vowel আছে  বের কর????

// const vowels = ["a","e", "i", "o", "u"];

// function countVowels(sentence) {

//   let count = 0;

//   const letter = Array.from(sentence);

//   letter.forEach(function(value){
//     if(
//       vowels.includes(value)
//     ){
//       count++;
//     }
//   });

//   return count;
// }

// console.log(countVowels(" i am nishan das i also very lazy "));

// const vowels = ["a","e","i","o","u","A","E","I","O","U"];

//   function countVoels(sentence) {

//     let count = 0;
//      const letter = Array.from(sentence);

//      letter.forEach(function(value){
//        if(
//          vowels.includes(value)
//        ){
//          count++;
//        }
//      });
//      return count;
//   }

//   console.log(countVoels("A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."));

//

// let age = 17;

// if (age >= 18) {
//    console.log("You are adult!");
// } else{
//    console.log("You are not adult!");
// }

// // console.log(age >= 18 ? "You are adult!" : "You are not adult!");

// // let age = 17;

// // console.log(age >= 18 ?
// //     age < 30 ?
// //      "You are an adult!" : "You are old!" : "You are young!");

// // let x = "sabik"
// // let y = "akash"

// // console.log(x > y);
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// };

// console.log(new Date())

// const cars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",];

// for(
//   let i = 0;
//   i < cars.length; i++
//   ) {
//     console.log(i)
//   }
// loop in t-36
// const person = { fname:"nishan" , lname:"Doe" , age: "21"}

// for (let x in person) {
//   console.log(person[x])
// }
// let x = 100.495;

// console.log(Math.trunc(x));

// let x = [0,1,2,3,4,5,6,7,8,9,10];

// for(let i = 1; i< 10; i++){
// console.log(i)
// }
// const cars = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
// ];
// for (let car of cars) {
//   console.log(car);
// }

// typeof  t-43

// let a = "chattogram";
// let b = "I love";

// let c = b + " " + a;

// console.log(typeof c);
// constructor 
function isArray(myArray) {
   console.log((myArray.constructor.toString().indexOf('Array') > -1));
 }
isArray([1, 2, 3]);


