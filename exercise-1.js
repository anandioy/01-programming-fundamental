
const rectangleLength = 5;
const rectangleWidth = 3;
//1. find area of rectangle
console.log(rectangleLength * rectangleWidth);

//2. find perimeter of rectangle
console.log((rectangleLength + rectangleWidth) * 2);

//3. area of circle
const radius2 = 5 ;
const pie2 = 3.14;
const diamet = radius2 * 2;
console.log(Math.pow(radius2, 2) * pie2);

//circumference
console.log(pie2 * diamet);

//4. write a code to find angles of triangle if two angles
//are given, example: a = 80, b = 65 -> 35
const angle1 = 80;
const angle2 = 65;
const totalAngle = 180;
console.log(totalAngle - angle1 - angle2);

//5. write a code to get difference between dates in days
// 
let firstDate = new Date ("2024-02-14");
let secondDate = new Date ("2024-02-10");
console.log((firstDate - secondDate)/(24 * 3600 * 1000));
//24 jam, 3600 menit, 1000 milisecond buat convert

//6. write a code to convert days to years, months and days
//(notes: 1 year : 365 days, 1 month, 30 days).
//example: 400 days -> 1 year, 1 month, 5 days.
//example: 366 days -> 1 year, 0 month, 1 day.

let dayOne = 400;
const year = dayOne / 365;
const months = (dayOne % 365) / 30;
const days = (dayOne % 365) % 30;

console.log(year);
console.log(months);
console.log(days);
console.log(year.toFixed() + " year, " + months.toFixed() + " month, " + days + " days");

let dayTwo = 366;
const year2 = dayTwo / 365;
const months2 = (dayTwo % 365) / 30;
const days2 = (dayTwo % 365) % 30;
console.log(year2.toFixed() + " year, " + months2.toFixed() + " month, " + days2 + " day");