console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function plus(num) {
    return function(plusNumber) {
        return num + plusNumber;
    };
}
const plus15 = plus(15);
console.log(plus15(10)); 

// call the plus15 function with 10 passed in and log the result to the console, which will output 25



// Exercise 2  Section

// For Each

// start with this code 

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];


/*
function printHobbits(allTheHobbits) {
  for (let i = 0; i < allTheHobbits.length; i++) {
    //print out the Hobbits stats
    printHobbits(allTheHobbits[i]);
  }
}
*/

users.forEach((user) => {
  console.log(user.name);
});


// possible for .map question:
 //let hobbitsArr = users.map(function (element, index, arr){
     //return {
       // name: user.name, 
        //name: user.score
    // };
// });
//console.log(hobbitsArr);

// .map
const hobbitArr = users.map(user => {
    return {
        name:user.name,
        score: user.score
    };
});
console.log(hobbitArr);

// .filter
 const filteredHobbits = users.filter((element, index, arr) => {
   if (element.isActive) {
     return true; //keep that in the resulting array
   }
 });
 console.log(filteredHobbits);


 // .sort 

 /*const sortHobbits = users.sort((element, index, arr) => {
   if (element.) {
     return true; //keep that in the resulting array
   }
 });
 console.log(sortHobbits);*/

 users.sort((a,b) => b.score - a.score);
console.log(users);



// reduce exercise 
let sumOfScores = users.reduce((sum, user) => sum + user.score, 0);

let averageScore = sumOfScores / users.length;

console.log("Sum of all scores:", sumOfScores);
console.log("Average score:", averageScore);            