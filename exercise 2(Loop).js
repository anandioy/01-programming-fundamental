//EXERCISE
//pseudocode in looping statement

// write a code to convert celcius to fahrenheit
// 60 celcius -> 140 Fahrenheit
// (1 + 9/5) + 32 = 33.8
// (2 + 9/5) + 32 = 35.6

let celcius = 60;
let fahrenheit = (celcius * 9/5) + 32;

console.log(fahrenheit);

// write a code to check whether the number is odd or even
// 25 -> odd number, 2 -> even number

const numberCheck = 31
let evenOr;

if (numberCheck % 2 === 0) {
    evenOr = `${numberCheck} is an even number`;
} else {
    evenOr = `${numberCheck} is an odd number`;
}
console.log(evenOr)

//write a code to check whether the number is prime number or not
// 7 -> 7 is a prime number
// 6 -> 6 is not a prime number

let numb = 5;
let isPrime = true
answer = `${numb} is a prime number`;

if (numb === 1 || numb === 0){
    answer = "0 and 1 are not prime numbers";
}
for (let x = 2; x < numb; x++){
    if (numb % x == 0){
        isPrime = false;
        answer = `${numb} is not a prime number`;
        break;
    }
}
console.log(answer)

//write a code to find the sum of the number 1 to N
// 5 -> 1 + 2 + 3 + 4 + 5 = 15
// 3 -> 1 + 2 + 3 = 6
// n(n+1)/2

let sum = 0;

for (y = 0; y <= numb; y++){
    if (sum += y);
}
console.log(sum)

//write a code to find factorial of a number
//example: 4! -> 4 x 3 x 2 x 1 = 24
//example: 6! -> 6 x 5 x 4 x 3 x 2 x 1 = 720
// 

if (numb === 0 || numb === 1){
    answer1 = 1
}
for (let z = numb-1; z>= 1; z--){
    if(numb *= z);
    answer1 = numb;
}
console.log(answer1);


//write a code to print the first N fibonacci numbers
//example : 15 -> 610

//fibonacci sequence nambahin angka dengan angka sebelumnya dan seterusnya
//1, 1, 2, 3, 5, 8, 13, 21, 44 dst.
//n1, n2 = n1, n3 = n1+n2, n4 = n1 + n2 + n3 ...

let fib = 10;
let n1 = 0, n2 = 1, next;

for (let a = 1; a <= fib; a++){
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}


//coba-coba bikin sequence setiap angka nambah ngurut dari 1,2,3,4,...
// 0, 1, 3, 6, 10, 15, 21, 28, 36, 45
let seq = 10;
let x1 = 0, x2 = 1, next1;

for (let b = 1; b <= seq; b++) {
    console.log(x1);
    next1 = x1;
    x1 = next1 + b ;
    x2 = next1;
}