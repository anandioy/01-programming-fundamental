// functions itung-itungan simpel; homework//

function area(length, width) {
    let result = length * width;
    return result;
}

function perimeter(length, width){
    let result = (length + width) * 2;
    return result;
}

console.log(area(5, 3));
console.log(perimeter(5, 3));

function circleDiameter(radius, radius){
    let result = radius + radius;
    return result;
}

console.log(circleDiameter(5, 5))

function circleArea(radius, pie){
    let result = pie * (radius*radius);
    return result;
}

console.log(circleArea(5, 3.14159));

function circleCircum(radius, diameter){
    let result = radius * diameter;
    return result;
}

console.log(circleCircum(5, 10));

// template literals //


const string = "12345";
const string2 = `${string} World, This is Purwadhika,
                 Lets learn something new everyday`;


console.log(string2)

//built in method pake variabel terus titik//

const numbers = 5;
console.log(numbers.toString());

const numbers2 = 5.1234;
console.log(numbers.toFixed());

//global built in kalo ini tinggal ambil  //
//ganti string jadi number bisa pake parseINt ato Number //
console.log(parseInt(string));
console.log(Number(string));

//string built in method slice blablabla//
//kalo tambah2an number + string, jadinya ke concatenate (1 tambah 1 jadi 11) //

const js = 1 + 1;
console.log(js);

let sebuahAngka = 1;
sebuahAngka = "test";
console.log(sebuahAngka);

//boolean conversion//

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(" "));
//jadi true karena ada spasi, dianggep ada isinya//

//string conversion//
let num = 123;
console.log(String(num));

//date data type
//kalo date kosong , dia bakal isi tanggal sekarang, kalo diisi string kaya contoh kedua, dia ngikutin tanggal yang diisi
// harus pake new sebelum date utk manggil
//bisa format dates pake built in method

let dateNow = new Date();
console.log(dateNow);
const dateNowFormat = dateNow.toLocaleString('in-ID', {timeZoneName: "short",
})

console.log(dateNowFormat)
const dateNowFormat2 = dateNow.toLocaleString('in-ID', {
day: "2-digit",
month: "2-digit",
year: "numeric",
});
console.log(dateNowFormat2)


let customDate = new Date("2024-01-01");
console.log(customDate);

//ini tanggal paling awal di javascript//
let add0day = new Date (0);
console.log(add0day);

//cara nambahin sehari dari tanggal hari ini
let add1DayFromNow = new Date (dateNow.getTime() + (24 * 3600 * 1000));
console.log(add1DayFromNow)

let newDate = "2023-02-01";
let newDate1 = new Date("2023-01-01");
console.log(newDate1.getFullYear());
console.log(newDate1.getDate());
//kalo mau dapet bulan yang diinginkan harus tambah 1 karena bulan
//dalam javascript mulai dari 0


//type conversion dari string ke number biar bisa
//nambahin string with numbers

let value = "1";
let newValue = Number(value) + 1;
console.log(newValue);

//karena value nya di let, bisa ditiban jadi 2//
value = 2;
console.log(value);

//contoh concatenate//
console.log("Hello" + " World");



//--- Operators---//
//+ , -, *, /, %, ** (modulo) //

const numberz = 1 + (1 * 1) / 1;
console.log(numberz)

const operand = 5 * 2;
//operator binary, 5 operand pertama, 2 operand ke2

let x = 1;
x = -x;
console.log(x);

//INCREMENT++ AND DECREMENT -- utk nambahin
//tapi gabisa lebih dari satu
let y= 2;
y = --y;
console.log(y)

let z= 2;
z = ++z;
console.log(z);
//karena cuma 1 operator yaitu x, maka disebut unary
// -- artinya -1, ++ artinya +1


//CONCATENATION
//mainin spasi di dalem variabel ato tambahin 1
//string " " di const baru nya
let kalimat = "Hello";
let kalimat2 = "World";
let kalimat3 = "Worlldddz"
let angka1 = 1234
const newKalimat = kalimat + " " + kalimat2;
console.log(newKalimat);
const newKalimat2 = `${kalimat} ${kalimat3} ${angka1}`;
//yg ini pake template literals//

console.log(newKalimat2);

//modify in place (langsung berubah ditempat atau penambahan
//yang disederhanain penulisannya)

let n = 2;
n += 5; // n = 2 + 5 atau n = n + 5
console.log(n);

n *= 2 // n = 7 * 2
console.log(n)

let r = 5;
console.log(++r) // 5 + 1
//prefix form, kalo value sebelumnya udah ga dipake lagi,

console.log(r++);

let h = 5;
console.log(h++);
console.log(h)
//postfix dipake kalo mau pake value lama nya dulu,
//makanya harus console log sekali lagi baru keliatan
//value setelah ditambah

//--------------------

//comparison operators

let numFirst = 4;
let numSecond = "2";

//meskipun numSecond dalam bentuk string, 
//bakal ttp dianggap true (ga peduli tipe data)
console.log(numFirst == numSecond);
console.log(numFirst != numSecond);

//kalo numSecond dalam bentuk string, 
//bakan dianggep false (peduli tipe data)
console.log(numFirst === numSecond);
console.log(numFirst !== numSecond);

//!= artinya not equal to

console.log(numFirst > numSecond);
console.log(numFirst < numSecond);

console.log(numFirst >= numSecond);
console.log(numFirst <= numSecond);

//pseudocode, cara buat nulis code sebelum 
//actually coding, identify masalah, tulis pake
//bahasa sendiri dulu, baru ditranslate ke code

const rectangleLength = 5;
const rectangleWidth = 3;
//find area of rectangle
console.log(rectangleLength * rectangleWidth);

//find perimeter of rectangle
console.log((rectangleLength + rectangleWidth) * 2);

//area of circle
const radius2 = 5 ;
const pie2 = 3.14;
const diamet = radius2 * 2;
console.log(Math.pow(radius2, 2) * pie2);

//circumference
console.log(pie2 * diamet);

//write a code to find angles of triangle if two angles
//are given, example: a = 80, b = 65 -> 35
const angle1 = 80;
const angle2 = 65;
const totalAngle = 180;
console.log(totalAngle - angle1 - angle2);

//write a code to get difference between dates in days
// 
let firstDate = new Date ("2024-02-14");
let secondDate = new Date ("2024-02-10");
console.log((firstDate - secondDate)/(24 * 3600 * 1000));
//24 jam, 3600 menit, 1000 milisecond buat convert

//write a code to convert days to years, months and days
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