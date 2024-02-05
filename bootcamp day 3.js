//conditional statements

// if statement  takes a condition (which should result in a boolean)
// syntax if () {} 
// else if (){}
// else {}
// tapi else if ga ditutup pake else gapapa 
// * kalo misalkan perbandingan tapi dalam bentuk string, nanti
// yang di compare adalah length dari string tersebut

let age = 20;
let status = "Fresh Graduate";
let gender = "Male";

if (age > 17 && age < 20) {
    //block of code if
    console.log("Bisa membuat KTP");
} else if (age > 20 || age == 20) {
    //block of code else if
    console.log("sudah memiliki KTP");
} else {
    //block of code else
    console.log("Belum bisa membuat KTP");
}

//bisa juga masukin if di dalam if, namanya nested if(??)

if (age > 14){
    if (gender == "Male"){
        console.log("Kamu laki laki");
    }
    else if (gender == "Female"){
        console.log("Kamu Perempuan");
    }
}

//bisa misahin two sets of criteria, contoh dibawah berarti
//kalo age lebih dari 21 tapi female dan ga fresh graduate ttp
//bisa kerja, tapi kalo umur kurang dari 20 tapi fresh graduate
//dan male, maka bisa kerja

if (age > 21 || status == "Fresh Graduate" && gender == "Male"){
    console.log("Bisa Kerja");
} else {
        console.log("Gak bisa kerja");
    }

//chaining condition (kalo else ifnya banyak)

//---------------

//SWITCH

let buah = "Oranges";

switch (buah){
    //block of code switch
    //kalo variabel buah = orange, masuk ke  case pertama
    //kalo variabel buah = mangoes, masuk ke case  kedua
    case 'Oranges':
        console.log("Harga oranges adalah 5rb");
        break; //harus ada break biar ga kebaca dua-duanya
    case 'Mangoes':
        console.log("Harga mangoes adalah 10rb");
        break; //kalo gapake break, terus var buahnya mangoes, nanti
               //di output papaya juga muncul
        case "Papayas":
            console.log("Harga papayas adalah 2rb")
}

//penyingkatan if else


//----- boolean ------//
//angka 1 atau lebih dari 1 dianggap true
//angka 0 false, string ada isi (even spasi)
//dianggap true kalo kosong false.
//falsy: ""empty string, 0, null, undefined, NaN
//truthy: " " blank character string, empty array,
//{}empty object, 1, "1", "0", "false", "true"

console.log(Boolean("1 "))
console.log(Boolean(0))

let inputUser = "";

if (inputUser) {
    console.log("Input sudah dimasukkan");
} else  {
    console.log("Input belum dimasukkan");
}

let bool = 0;
//tanda seru untuk negate
if (bool){
    console.log("Masuk");
}  else if (!bool){
        console.log("Tak masuk");
    }

    // let bool = true;
    // let angka = 3;

    // if (!(angka === 2)) {
    //     console.log("masuk");
    // }

const numberToCheck = 10;
let isEven;

if (numberToCheck % 2 === 0) {
    isEven = `${numberToCheck} is an even number`;
} else {
    isEven = `${numberToCheck} is not an even number`;
}

console.log(isEven)

//---------------------------------------
//loop statements
//sequence of commands or instructions that is repeatedly
//executed until a certain condition is met

//setelah let, pisahin pake titik koma ";" utk set kondisi
//cb liat pythontutor.com utk liat cara kerja javascript
//ngebaca loop secara step by step
//i++ postfix

//FOR LOOP
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("looping sudah selesai")

//setelah 9 udah ga jalan karena i harus dibawah 10,
//jadi stepnya, i dari 0, terus dia cek i nya kurang dari 10 ga,
//kalo iya, karena i++, jadi i nya ditambah 1, terus ulang lagi
//1 kurang dari 10 ga, iya, jadi i++ lagi, 1 tambah 1, jadi 2
//gitu terus sampe 9, baru kalau udh kelar akan di execute
//yang "looping sudah selesai"


for (let i = 10; i > 0; i--) {
    console.log(i);
}
//contoh untuk ngeluarin yang genap aja dalam loop,
//bisa ditambah if dulu. semakin banyak loop nya,
//semakin lambat karena stepnya makin banyak
//buat si javascript ngeexecutenya

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//WHILE LOOP
//conditions that are repeated
//jangan sampe infinite loop, karena nanti komputer
//bisa jadi lemot bgt

let x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}

//another way to write this code.. tapi di angka 6 di break
//dengan ngasih condition kalo y == 6, bools nya jadi false,
//loopnya stop karena bools yang tadinya true jadi false
//ini dipake kalo batesnya gabisa di kontrol oleh kita sendiri
//(cth user input) jadi kita bikin kondisi dimana kalo user
//input
//kalo false langsung gaakan kebaca
let y = 0;
let bools = true;
while (bools) {
    if (y == 6) {
        bools = false;
    }
    console.log(y);
    y++;
}

//DO... WHILE LOOP

y = 0;
bools = true;
do {
    if (y == 6) {
       break;
    }
    console.log(y);
    y++;
} while (bools);

console.log("next line")

//ini buat ngeskip 1 loop yang ga diinginkan contoh dibawah
//5 dan 7
for (let i = 0; i < 10; i++){
    if (i == 5 || i == 7) {
        continue;
    }
    console.log(i);
}
