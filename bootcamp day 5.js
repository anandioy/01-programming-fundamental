//array is a collection of similar data elements stored at contiguous
//memory locations
// a b c d e (array of string)
// 0 1 2 3 4 (index)
//makanya kalo pake looping rata-rata mulai dari 0, biar data pertama dalam
//array keambil

//array declaration
//contoh array
// bisa juga penulisannya -> let arr = new Array()
let sepatu1 = "Hoka";
let listSepatu = ['Adidas', 'Nike', 'Puma']; //array of string

console.log(listSepatu[1]); 
console.log(listSepatu.length);
//cara ngambil value dalam array

listSepatu[1] = "NB"; // cara ubah value dalam array
listSepatu.push("Converse"); // utk nambahin elemen baru pada array
listSepatu.push(sepatu1);

for (let i = 0; i < listSepatu.length; i++) {
    console.log(listSepatu[i]);
}

let listAngka = [1, 2, 3]; //array of numbers

let listPeople = [
    {name: "Budi",
     age: "22"},
    {name: "Dodi",
     age: "23"},
]

console.log(listPeople)

//array builtin method
console.log(listAngka.pop()); //utk remove value terakhir
console.log(listSepatu.pop());
console.log(listSepatu);

console.log(listSepatu.shift()); //remove value pertama
console.log(listSepatu);
console.log(listSepatu.unshift("Adidas")); //balikin value pertama
console.log(listSepatu);
console.log(listSepatu.splice(2, 0, "data"));
console.log(listSepatu)



console.log(listSepatu.reverse()); //reverse array

// FOR OF LOOP

for (let sepatu of listSepatu) {
    console.log(sepatu);
    console.log(sepatu[0]);
}
//ini bukan jadi array lagi, udah jadi string. baca satu-satu
//data dari array utk setiap iteration
//tapi ini jarang dipake kalo kita perlu utk indexing, harus pake dalam
//bentuk array biar indexnya kebaca


// FUNCTION
// supaya block of code bisa dipake berulang2

function loopingSepatu(listData) {
    for (let data of listData){
        console.log(data);
    }
}
console.log(loopingSepatu(listSepatu));

//function declaration
//a and b anggepannya parameter dalam sebuah function, which
//bakal nampung argumen
function pertambahan(a, b) {
    return a + b; //utk mendapatkan jawaban dari argumen yg udh diinput
}
//2 dan 4 dibawah adalah argument. akan dilempar ke parameter
console.log(pertambahan(2, 4)); 
console.log(pertambahan(5, 9));

//kalo return ditaro looping, nanti pas iteration 
//tertentu loopnya bisa ngebreak padahal belum kelar
//makanya biasanya ditaro diluar loop

let jumlah = pertambahan(3, 2);
console.log(jumlah);

//function expression

let defaultAngka = 5;//variabel global scope


//bisa kasih default parameter, tapi kalo mau 1 doang, cuma bisa ditaro di
//yang terakhir, kalo ga nanti NaN, kecuali a nya diganti juga jadi 
//default parameter juga
const pengurangan = function (a = 8, b = 3){
    console.log(defaultAngka) //variabel global bisa masuk ke function
    let functionAngka = 3;//variabel yang di declare di dalam function gabisa dipake diluar function itu sendiri

    return a - b;
};
console.log(pengurangan(5, 2));

console.log(pengurangan(5)); 
//ini bisa ttp keluar resultnya karena default parameter b = 3, jd 5-3=2


//console.log(functionAngka) gabakal bisa ketemu karena variabel
//ada di dalem function, kalo variabel diluar function mau masuk bisa


//kalo function declaration bisa diambil sebelum code dibuat
//kalo expression gabisa sebelum code

// Rest parameter
//allows a function to accept an indefinite number of arguments as an array,

const greetings = function(a, b, ...c) {
    console.log(c);

    let message = "";
    for(let name of c) {
        message += `${name}, `;
    }
    return a + " " + b + " " + message;
};

console.log(greetings("hello","world", "budi", "johnny", 1));

