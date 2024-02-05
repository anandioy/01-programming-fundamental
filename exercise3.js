//1. write a code to display the multiplication table of a given integer
//example: number -> 9 
//output: 9 x 1, 9 x 1, .... 9 x 10

let lim = 11;
let multiply1 = 0, multiply2 = 1, numb = 9, next, result;
for (let a = 1; a <= lim; a++){
    console.log(`${numb} x ${multiply1} = ${result}`)
    next = multiply1 + 1;
    multiply1 = multiply2;
    multiply2 = next + 1;
    result = numb * multiply1;
}

//2. write a code to check whether a string is a palindrome or not 

let str = "madam";
let strLength = str.length;
res = `${str} is a palindrome`;

for (let m = 0; m < strLength / 2; m++) {
    if (str[m] !== str[strLength -1 -m]){
        res = `${str} is not a palindrome`;
    }
}
console.log(res)


//3. code to convert centimeter to kilometer
let centimeter = 100000;
let kilometer = centimeter / 100000;
console.log(`${centimeter} centimeters is equal to ${kilometer} kilometers`);

//4. write a code to format number as currency (IDR)
let amount = 1000000;
console.log('IDR '+(amount).toLocaleString('en-ID')+'.00');

//5. write a code to remove the first occurrence of a given "search string" from a string
//example: string = "Hello World", search string = "ell" -> output "Ho World"

let string = "Hello World";
let searchString = "He";
let result1 = string.indexOf(searchString);
    if (result1 === -1){}
console.log (string.slice(0,result1) + string.slice(result1 + searchString.length));

//6. write a code to capitalize the first letter of each word in a string
//"hello World" -> "Hello World"

let string2 = "moma";
console.log(string2.charAt(0).toUpperCase() + string2.slice(1))

//7. write a code to reverse a string 
//"hello" -> "olleh"

let string3 = "Hello";
let rev = "";
for (let r = string3.length - 1; r >= 0; r--){
    console.log(r)
    rev += string3[r];
}
console.log(rev);

console.log(string3[4])

//8. code to swap the case of each character from string
//example: The QuiCk BrOwN Fox' -> 'tHE qUIcK bRoWn fOX'

let stringTest = "The QuiCk BrOwN Fox";
let newString = "";
for (x = 0; x < stringTest.length; x++){
    if (stringTest[x] === stringTest[x].toLowerCase()){
        newString += stringTest[x].toUpperCase();
    } else {
        newString += stringTest[x].toLowerCase();
    }
}
console.log(newString)

//9. write a code to find the largest of two given integers
//example: num1 = 42, num2= 27 -> 42

let int1 = 4;
let int2 = 27;

if (int1 > int2){
    console.log(int1);
} else if (int1 < int2){
    console.log(int2);
}

//10. write a conditional statement to sort three numbers
//example:num1 = 42, num2 = 27, num3 = 18 = 18,27,42

let hArray = [42, 27, 18];
hArray = hArray.sort();
console.log(hArray);

//11. write a code that shows 1 if the input is a string, 2 if 
//the input is a number, and 3 for other datatype
//example : "hello" -> 1

let varx = "yes";

if (typeof varx === "string"){
    console.log("1");
} else if (typeof varx === 'number'){
    console.log("2");
} else {
    console.log("3");
}

//12. write a code to change every letter a into * from a string of input
//Example: nasi ayam -> n*si *y*m

let string5 = "Nasi ayam";
let replace = string5.replaceAll("a","*");
console.log(replace);