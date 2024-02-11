//1. CREATE FUNCTION THAT CAN CREATE TRIANGLE PATTERN ACCORDING TO HEIGHT WE PROVIDE LIKE THE FOLLOWING
//   01
//   02 03
//   04 05 06
//   07 08 09 10

function fTriangle(num){

let a = 0;
let string = 0;

for (let i = 1; i <= num; i++){
    for (let j = 1; j <= i; j++){
        string += ++a

        string += j === i ? "\n" : " "
        }
    }
    return string
}
console.log(fTriangle(4));
    
// 2.Create a function that can loop the number of times according to the input we provide, 
// and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", 
// multiples of 3 and 5 with "FizzBuzz".
// ● Parameters : n → total looping

function fizzBuzz(numb){

    let ans = '';
    let arr = [];

for (let a = 1; a <= numb; a++){
    if (a % 3 == 0 && a % 5 == 0){
        ans = 'FizzBuzz'; // Kenapa kalau ini ditaro di else if, ga jalan??
        arr.push(ans)
        } else if (a % 5 ==0){
        ans = 'Buzz';
        arr.push(ans)
        } else if (a % 3 == 0){
        ans = 'Fizz';
        arr.push(ans)
        } else {
        ans = a;
        arr.push(ans)
        }
    console.log(ans)
    }
    return arr;
}

console.log(fizzBuzz(15));

//3. Create a function to calculate Body Mass Index (BMI)
//   Formula : BMI = weight (kg) / (height (meter))2
//   Parameters : weight & height
//   Return values : < 18.5 return “less weight”, 18.5 - 24.9 return “ideal”, 25.0 - 29.9 return “overweight”, 
//   30.0 - 39.9 return “very overweight”> 39.9 return “obesity”
 
function bmiCalculate(weight, height) {

    let bmiCalc = (weight / (height * height) * 10000); //height in cm, weight in kg
    let message = "You";
            if (bmiCalc < 18.5){
            message += ' are underweight';
            }
            else if (bmiCalc >= 18.5 && bmiCalc <= 24.9){
            message += ' have ideal body weight';
            }
            else if (bmiCalc >= 25.0 && bmiCalc <= 29.9){
            message += ' are overweight';
            }
            else if (bmiCalc >= 30.0 && bmiCalc <= 39.9){
            message += ' are obese';
            }
            else {
                message = 'please input valid height and weight';
            }
            console.log(bmiCalc);
            return message;
        }

console.log(bmiCalculate(77, 185));

//4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
//   Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function ifEven(){

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
let newArray = [];

for (let x = 0; x <= array.length; x++) {
if (x % 2 !== 0) {
    newArray.push(array[x]);
    console.log(newArray);
    }
    }
return newArray;

}

console.log(ifEven());

//5. Write a function to split a string and convert it into an array of words
//   Example : “Hello World” → [“Hello”, “World”]
 
function splitSentence() {

let sentence = "Hello World";
let newArr = [];

newArr.push(sentence.split(' '));
return newArr;
}

console.log(splitSentence());