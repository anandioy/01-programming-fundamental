// OBJECT ORIENTED PROGRAMMING

let sepatu = {
    merek: "adidas", //property of an object
    tipe: "superstar",
    ukuran: 45,
    fungsi: function () {
        return "digunakan utk berjalan";
    }
};

let listSepatu = [
    {
        merek: "adidas",
        tipe: "superstar",
        ukuran: 45,
    },
    {
        merek: "adidas",
        tipe: "superstar",
        ukuran: 40,
    }
];
//tambahin property 
sepatu.milik = "saya";

console.log(sepatu);
console.log(listSepatu);
console.log(sepatu.fungsi());
console.log(sepatu.ukuran); //access with dot
console.log(sepatu["merek"]); //access with bracket
console.log(listSepatu[0].merek);



// Object constructor
let car = new Object();
car.brand = "BMW";
car.price = 8000000;
console.log(car);

let person = {
    name : "Budi",
    age: 21,
    education: {
        school: "SMP",
        highschool: {},
    },
};
console.log(person.education);
console.log(person.education.school);

//optional chaining
console.log(person.education.highschool?.name); //tanda tanya berarti ga wajib utk diisi 
                                               //(optional chaining, biar program ga crash)
console.log("Hello")
console.log(Object.keys(person));

//for let in 
for (let key in person){
    console.log(key);
    console.log(person[key]); //dapet value dari setiap key yg diloop
}

// getter and setter method
const user = {
    firstName: 'Budi',
    lastName: 'Widodo',
    age: 21,

    get fullName(){
        return `${this.firstName} ${this.lastName}`; //mau ngambil properti didalam object itu sendiri, pake this
    },
    set thisName(value){
        const split = value.split(" ");
        console.log(split);
        this.firstName = split[0]; // panggil array index 0 -> Joko
        this.lastName = split[1]; //panggil array index 1 -> Widodo
    } //utk ngewrite data ke object
};
console.log(user.fullName);
user.thisName = "Joko Widodo";
console.log(user.fullName)

//destructuring
const { name, age, education } = person;
console.log(person.name);
console.log(name);
console.log(name, age, education);
//ini destructuring biar gausah person.name, gausah pake dot lagi utk ngeluarin isi dari person, utk mempersingkat

// spread operator
const obj1 = {
    a: 1,
    b: 2,
}

const obj2 = {
    c: 3,
    d: 4,
}

const arr = {...obj1, ...obj2};
console.log(arr); //ngegabungin 2 object

const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = [...arr1,...arr2];
console.log(newArr);

// Object built in method
const newObj = Object.assign(obj1, obj2);
console.log(newObj);

const newObj1 = Object.create(obj1);
obj1.a = 5;
console.log(newObj1.a);
console.log(Object.entries(obj1));

Object.freeze(obj1);

obj1.a = 6;
console.log(obj1);// a nya ga berubah lagi karena udah di freeze

const obj3 = {
    a: 1,
    b: 2,
}
const obj4 = {
    a: 3,
    b: 4,
}
console.log(Object.is(obj3, obj4)); //utk validasi

const num1 = {
    a: 1,
    b: 2,
};

const num2 = {
    c: 3,
    d: 4,
}

const newNum = Object.assign({}, num1, num2);
console.log(num1);
console.log(num2);
console.log(newNum);
newNum.a = 5;
console.log(newNum);
console.log(num1);
console.log(num2);

// CLASS
// class is a template for creating objects
// ibarat blueprint utk buat rumah, reusable utk create objects selanjutnya
// class expressions and class declarations

//class declaration
class User1 {
    //public property
    name = "Budi";
    greeting() {
        return "Hello World";
    }
}

//class expression
const User2 = class {
    //public property
    firstName;
    lastName;
    //private property
    #email; //gabisa diinherit ke class lain karena private

        constructor (firstName = "dodi", lastName = "user", email = "@gmailcom"){//defaultnya
            this.firstName = firstName;
            this.lastName = lastName;
            this.#email = email
        }

        greeting(){
        return `Hello World, ${this.#email}`;
        }
    }

const user1 = new User1();
console.log(user1.name);
console.log(user1.greeting());
console.log(user1)


const user2 = new User2("Joko", "Widodo", "joko@gmail.com"); 
console.log(user2.firstName, user2.lastName);
console.log(user2.greeting())


// INHERITANCE

class Product {
    constructor() {
        this.productName;
        this.price;

    }
}

class Book extends Product {
    constructor(){
       super(); //utk akses constructor dari class yg di inherit, hence book is child of product
        this.author;
    }
    getAuthor(){
        return this.author;
}
    setAuthor(authorName){
        this.author = authorName;
    }
}

class Shoes extends Product {
    constructor(){
        super();
        this.brand;

    }

    getBrand(){
        return this.brand;

    }
    setBrand(brandName){
        this.brand = brandName
    }
}

const book = new Book();
book.setAuthor("JK Rowling");
book.productName = "Harry Potter";
book.price = "IDR 300,000"
console.log(book);



const shoes = new Shoes();
shoes.setBrand("Adidas");
shoes.productName = "Sepatu";
console.log(shoes);

// Instance of
class Animal {}
class Rabbit extends Animal {}
class Tree extends Animal {}

const rabbit = new Rabbit();
const tree = new Tree();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Tree);
console.log(tree instanceof Animal);
console.log(tree instanceof Rabbit);




// Super

class Userz {
    name;
    #code = "";

    constructor(prefix = ""){
        const random = Math.round(Math.random() * 1000);
        this.#code = `${prefix}${random}`;
    }

    getCode() {  //ini function, bukan get. kalo pake get ntar coba (get nya dipisah kasi spasi)
        return this.#code
    }
}

class Student extends Userz {
    constructor(){
        super("STD");
    }
}

class Employee extends Userz {
    constructor(){
        super("EMP");
    }
}

const student = new Student();
console.log(student.getCode());

const employee = new Employee();
console.log(employee.getCode());