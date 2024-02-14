// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
let numArray = [12, 5, 23, 18, 4, 45, 32];

function findHighestLowestAvg(){
    numArray.sort((a, b) => a - b);
    console.log(numArray);
    let highest = numArray[numArray.length - 1];
    let lowest = numArray[numArray.length - 7];
    let sum = 0;

    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i];
        avg = sum/7;
    }
    console.log(highest);
    return {highest, lowest, avg};
    }
    console.log(findHighestLowestAvg())

function findMinMaxAvg(){
    let min = numArray[0];
    let max = numArray[0];
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < min){
            min = numArray[i];
        }
        if (numArray[i] > max){
            max = numArray[i];
        }
        sum += numArray[i];
    }
    const avg1 = sum/numArray.length;
    return {min, max, avg1};
}
console.log(findMinMaxAvg(numArray));

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date” 

function newString(fruits){
    let join = fruits.slice(0, fruits.length - 1).join(', ') + ", and " + fruits.slice(-1);
    console.log(join);
    return join
    }

console.log(newString(["apple", "banana", "cherry", "date"]));

// 3. Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

function splitString(sent) {

    let newArr1 =[];   
    
    newArr1 = (sent.split(' '));
    return newArr1;
    }
    console.log(splitString("Hello World"));

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let numbArr1 = [1, 2, 3];
let numbArr2 = [3, 2, 1];
let newArr = [];

function combineArray() {
    
    for (let i = 0; i < numbArr1.length; i++) {
        newArr[i] = numbArr1[i] + numbArr2[i];
    }
    return newArr;
}
console.log(combineArray());

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

let numberArray = [1, 2, 3, 4];

function addToArray(newElement){
   if (!numberArray.includes(newElement)){
   return numberArray + "," + newElement;
    }  else if (numberArray.includes(newElement)){
        return `${newElement} already exists`;
    }
}
console.log(addToArray(7))

// 6. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function ifEven(arrayx) {

    let newArray = [];
    
    for (let x = 0; x <= arrayx.length; x++) {
    if (arrayx[x] % 2 == 0) {
        newArray.push(arrayx[x]);
        console.log(newArray);
        }
        }
    return newArray;
    }
console.log(ifEven( [5, 4, 2, 3, 6, 1, 7, 8]));

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. 
// The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 
// than the array can only contain 5 elements)
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function insertArr(max, ...num){
    console.log(num)
    let newArr =[];

    for (let i = 0; i < max; i++){
       if (num[i] !== undefined) newArr.push(num[i]);
    }
    return newArr;
}
console.log(insertArr(5,2,4,1,2,3,4,5,6))

// 8. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function combineArr(arrFirst, arrSecond){
    let newArr2 = arrFirst.concat(arrSecond);
    return newArr2;
}
console.log(combineArr([5, 4, 2],[4, 5, 6]));

// 9. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

function findDupl(arr) {
    let dupl = [];
    let reverseArr = arr.sort();
    console.log(reverseArr);
    for (let i = 0; i < arr.length; i++){
        if(
            reverseArr[i] === reverseArr[i - 1] ||
            reverseArr[i] === reverseArr[i + 1]
        ){
            if (!dupl.find((x) => x == reverseArr[i])){
                dupl.push(reverseArr[i]);
            }
        }
    }
    return dupl;
}
console.log(findDupl([5,4,6,5,2,3,1,6,1]));

// 10. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function diff_arr(ar1, ar2) {
    let a = [];
    let diff = [];

    for (var i = 0; i < ar1.length; i++) {
        a[ar1[i]] = true;
    }
    for (var i = 0; i < ar2.length; i++) {
        if (a[ar2[i]]) {
            delete a[ar2[i]];
        } else {
            a[ar2[i]] = true;
        }
    }
    for (let x in a) {
        diff.push(x);
    }
    return diff;
}
console.log(diff_arr([1, 2, 3, 4, 5], [3, 4, 5, 6 , 7]))

// 11. Based on the array below write a function that will return primitive data types only. let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

function sumNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i])) result++;
    }
    return result;
  }
  console.log(sumNumber([1, [], undefined, {}, "string", {}, [], null, true]));
  
  const primitiveDataOnly = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "object" || arr[i] === null) res.push(arr[i]);
    }
    return res;
  };
  
  console.log(primitiveDataOnly([1, [], undefined, {}, "string", {}, [], null, true]))

  function findPrimitive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        typeof arr[i] === "number" ||
        typeof arr[i] === "string" ||
        typeof arr[i] === "boolean" ||
        arr[i] == null
      ) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  console.log(
    findPrimitive([1, [], undefined, {}, "string", {}, [], null, true])
  );

// 12. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function findSecondSmallest(arr) {
    let sort = arr.sort((a, b) => a - b);
    return sort[1];
}
console.log(findSecondSmallest([5, 6, 7, 8 , 2, 3]))

// 13. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sumOfAll(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfAll([1, 2, 3, 4, "5", true, 20, 30]));

// 14. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]; a. The function will return 40

function sumDuplicate(arr) {
    let sum = 0;
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
  
    for (let i = 0; i < arr.length; i++) {
      if (sortedArr[i - 1] == sortedArr[i] || sortedArr[i + 1] == sortedArr[i]) {
        sum += sortedArr[i];
      }
    }
    return sum;
  }
  
  console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10, 40]));

// 15. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. 
// The function will randomly pick between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

let game = ["Rock", "Paper", "Scissor"];
let choice;
const randomElement = game[Math.floor(Math.random() * game.length)];

function gameRPS(choice){
    if (randomElement === "Rock" && choice === "Paper") {
        return "Computer chooses " + randomElement + "," + " You Win";
    } else if (randomElement === "Rock" && choice === "Scissor"){
        return "Computer chooses " + randomElement + "," + " You Lose";
    } else if (randomElement === "Rock" && choice === "Rock"){
        return "Computer chooses " + randomElement + "," + " Tie Game";
    } else if (randomElement === "Paper" && choice === "Paper"){
        return "Computer chooses " + randomElement + "," + " Tie Game";
    } else if (randomElement === "Paper" && choice === "Scissor"){
        return "Computer chooses " + randomElement + "," + " You Win";
    } else if (randomElement === "Paper" && choice === "Rock"){
        return "Computer chooses " + randomElement + "," + " You Lose";   
    } else if (randomElement === "Scissor" && choice === "Paper"){
        return "Computer chooses " + randomElement + "," + " You Lose";
    } else if (randomElement === "Scissor" && choice === "Scissor"){
        return "Computer chooses " + randomElement + "," + " Tie Game";
    } else if (randomElement === "Scissor" && choice === "Rock"){
        return "Computer chooses " + randomElement + "," + " You Win";
    }
}

console.log(gameRPS("Rock"))