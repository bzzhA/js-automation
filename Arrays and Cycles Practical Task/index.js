//*****************************************************************************************//

// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movie = ["movie1", "movie2", "movie3", "movie4", "movie5"];

for (let i = 0; i < movie.length; i++) {
  console.log(movie[i]);
}

//*****************************************************************************************//

// Given an array of car manufacturers, convert the array to a string and back to an array

const cars = ["bmw", "lexus", "toyota"];

function toStrBackArr() {
  return cars.join().split();
}

//*****************************************************************************************//

// Given an array of the names of your friends, add the words hello to each element of the array

const nameFriend = ["name1", "name2", "name3"];
nameFriend.splice(0, 3, "Hello name1", "Hello name2", "Hello name3");

//*****************************************************************************************//

// Convert numeric array to Boolean

const someValue = [1, 0, 1, 0, 1].map((someValue) => Boolean(someValue));
for (i = 0; i < someValue.length; i++) {
  console.log(someValue[i]);
}

//*****************************************************************************************//

// Sort the array [1,6,7,8,3,4,5,6] in descending order

const someNum = [1, 6, 7, 8, 3, 4, 5, 6].sort(sortNum).reverse();
function sortNum(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log(someNum);

//*****************************************************************************************//

// Filter array [1,6,7,8,3,4,5,6] by value> 3

const someNumber = [1, 6, 7, 8, 3, 4, 5, 6].filter(
  (someNumber) => someNumber > 3
);

//*****************************************************************************************//

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function findIndex(arr, numb) {
  let idx = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === numb) {
      idx = i;
      break;
    }
  }
  return idx;
}

//*****************************************************************************************//

// Implement a loop that will print the number 'a' until it is less than 10

function printNumb(numb) {
  for (i = numb; i >= 10; i--) {
    console.log("a");
  }
}

//*****************************************************************************************//

// Implement a loop that prints prime numbers to the console

const numbs = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

for (i = 1; i < numbs.length; i++) {
  if ([2, 3, 5].includes(numb[i])) {
    console.log(numbs[i]);
  } else if (numbs[i] % 2 !== 0 && numbs[i] % 3 !== 0 && numbs[i] % 5 !== 0) {
    console.log(numbs[i]);
  }
}

//*****************************************************************************************//

// Implement a loop that prints odd numbers to the console

const numer = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

for (i = 1; i < numer.length; i++) {
  if (numer[i] % 2 !== 0) {
    console.log(numer[i]);
  }
}

//*****************************************************************************************//
