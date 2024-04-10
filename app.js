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

// for each 
// remember (element, index, array       )

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
// look at each element and answer this question: Should we keep this element? (yes or no?)

 const filteredHobbits = users.filter((element, index, arr) => {
   if (element.isActive) {
     return true; //keep that in the resulting array
   }
 });
 console.log(filteredHobbits);


 // .sort 
 //re arrange the order of teh elements in the array 
 // it does so based on some provided criteria 
 // . sort will change the array directly
 // outcomes: (-1, 0, 1)

 /*const sortHobbits = users.sort((element, index, arr) => {
   if (element.) {
     return true; //keep that in the resulting array
   }
 });
 console.log(sortHobbits);*/

 users.sort((a,b) => {
    return b.score - a.score
 });
console.log(users);


//another way
// if (a.score > b.score){
    //return -1;
//} else if (a.score < b.score){
    //return 1;
//} else {
    //return 0;
//} 

 

// reduce exercise 
// reduce - simplify all the information down to one single piece of info 
// on every iteration, reduce will give you an accumulated value and the current iteration's element
// reduce takes two values - two parameters (very common to give 0)
// zero as the accumulator value
//(accumulator, currentValue) - 
let sumOfScores = users.reduce((sum, user) => {
    return sum + user.score}, 0);

let averageScore = sumOfScores / users.length;

console.log("Sum of all scores:", sumOfScores);
console.log("Average score:", averageScore);            