let a = 1;
let b = 2;

console.log(a + b);

// function declaration

function pertambahanDec(x, y) {
    // function body, bisa masukin looping, conditional, dst.
    console.log(x);
    console.log(y);
    return x + y;
}

console.log(pertambahanDec(1, 2));
console.log(pertambahanDec(4, 4));

// function expression, jadi kaya buat variabel, tapi isinya function
const pertambahanExp = function(x, y){
    console.log(x);
    console.log(y);
    return x + y;
}

console.log(pertambahanExp(1, 2));
// tapi kalo di console.log sebelum di declare, gabakal kebaca
// sementara kalo function declaration bisa

function getListData(sortBy = 'ASC') {
    let listData = [1, 2, 3, 4, 5];

    if (sortBy === "ASC") {
        return listData;
    } else {
        return listData.reverse();
    }
}

console.log(getListData("ASC"));
console.log(getListData("Desc"));

// Nested function : a function can have one or more
// inner functions. These nested functions are in the scope
// of outer function (function di dalam function)

//dalam kasus ini, firstName dan lastName adalah parameter,
//basically sama2 penampung value kaya variabel,
//tapi di dalem function, dan dia valuenya based on argument
//yang nanti diinput
function getMessage(firstName, lastName){
    let message;
    //getMessage function body
    //-------nested function 1
    function sayHello(){
        let hello1 = "test"; //gabakal bisa dipanggil diluar function karena di declare di dalem,
        //hello1 adalah local scope variable milik sayHello(),
        //dan tidak bisa dipanggil diluar dari scope function sayHello()
        message = 1;
        //message bisa dipanggil karena masih di dalem function getMessage (bisa dipanggil di sayHello)
        console.log(message);
        return `Hello ${firstName} ${lastName}, `;
    }
console.log(sayHello());
    //-------nested function 2
    function welcomeMessage() {
        return "Welcome to Purwadhika!";
    }
    return sayHello() + welcomeMessage();
}
//kalo console.log(sayHello()) gabakal bisa kepanggil karena diluar scope,
console.log(getMessage("Budi", "Widodo"))


// CLOSURE

function greeting(name){
    const defaultMessage = "Hello ";

    //kita me return function lagi
    return function () {
        return defaultMessage + name
    }
}
//si greeting akan mereturn function expression
const result = greeting("Budi");
console.log(result());
console.log(greeting("Dodo")());

// CURRYING
// is a transformation of functions that translates a 
//function from callable as f(a,b,c) into callable as
//f(a)(b)(c).
//currying doesnt call a function, just transforms it

function multiplier (factor, number) {
    return number * factor
}
console.log(multiplier(5,3));

function multiplierCur(factor) {
    return function (number) {
        return number * factor; //masih ttp bs dipanggil meskipun sudah di close(di return)
    }
}
const result1 = multiplierCur(5);
console.log(result1(3));
console.log(multiplierCur(3)(3));


//RECURSIVE FUNCTION (NGULANG KAYA LOOP);

function countDown(msg){
    console.log(msg);

    let nextNumber = msg - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3); //pemanggilan function

// ARROW FUNCTION
// PENYINGKAT FUNCTION EXPRESSION
// cth function expression
const ptmbhn = function (g, h){
    return g + h;
}
//kaloarrow function
const pengurangan = (a, b) => {
    return a - b;
};
const pengurangan1 = (a, b) => a - b

console.log(ptmbhn(4, 2));
console.log(pengurangan(4, 2));
console.log(pengurangan1(4, 2));

//kalo buat this, arguments, super atau built in method jangan pake arrow function
//ga ada akses ke new.target keyword

//PREDEFINED FUNCTION
//isFinite()
//isNan()
//parseFloat()
//parseInt()