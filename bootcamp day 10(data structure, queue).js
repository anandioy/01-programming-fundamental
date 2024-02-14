class Queue {
    #container =[];

    enqueue(element){
        this.#container.push(element);
    }

    dequeue() {
        this.#container.shift();//remove first element from array and return it
    }

    getElement(){
        return this.#container;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getElement());

queue.dequeue();
console.log(queue.getElement());
queue.enqueue(1);
console.log(queue.getElement());
queue.dequeue();
console.log(queue.getElement());
queue.enqueue(1);
console.log(queue.getElement());


//set
//pake kalo indexnya gamau ke specify the way array is
//kalo gamau gaada duplicate value

const fruits =[
    "banana",
    "apple",
    "orange",
    "apple",
    1,
    "1",
    { name: 1},
    { name: 1},
]
console.log(fruits);

const newFruits = new Set(fruits);
console.log(newFruits);

//add

newFruits.add("melon");
newFruits.add("melon");
console.log(newFruits);
//melonnya cuma satu karena gabisa duplicate

//delete

newFruits.delete("banana");
console.log(newFruits);

//has
console.log(newFruits.has("banana"));

//size
console.log(newFruits.size);

//entries

let getEntries = newFruits.entries();
console.log(getEntries);
console.log(getEntries.next().value); //pasti ke return in pairs, jadi bisa di cari index 0 nya aja utk dapet 1 value aja karena returnnya bentuk array jg
console.log(getEntries.next().value[0]);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);

//foreach

let text = "";
newFruits.forEach((item) => { //for each utk ngeloop di setiap isi set,
    text += `${item},`;
});
console.log(text);

//hash table / has map
//data structure that maps keys to values
//hash tables combine lookup, insert and delate in an efficient way

//map gunanya bisa utk kea search buku di perpus, karena real time ga kaya object
const myMap = new Map();

//set 

myMap.set("david", "001");
myMap.set("buchanan", "002");
myMap.set("buchanan", "009");

//get

console.log(myMap.get("david"));

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`)
}

//delete
myMap.delete("david");
console.log(myMap);

//
let hashing = new Map();

//cth linear probing utk menghindari data ketimpa ga kedetect
function hashMap(key, value){
    let sum = 0;

    for (let i = 0; i < key.length; i++){
        sum += key.charCodeAt(i); //menambah sum dari kode karakter "david"
    }//setiap karakter di keyboard ada codenya sendiri, ini yg dipake utk cari value setiap key yg berbeda,
    //masing masing dikasih jumlah unique masing2 mereka
    let hash = sum % 52; //di modulo biar nomer yg diassign bbuat each key ga kegedean, karena charcode satu huruf "a" aja udh gede, nanti kebanyakan nomornya
    console.log(hash);

    if(hashing.get(hash) === undefined){ //kalo keynya undefined
        return hashing.set(hash, { key, value});
    } else {
        while (hashing.get(hash) !== undefined) {//selama hashing undefined, dia akan nambah ke hash 
            hash++; //fungsinya supaya kalo ada jumlah character code yg sama, dia akan nambahin 1 sampe dia undefined lagi
        } //linear probing utk collision
    }
    console.log(hash);
    return hashing.set(hash, {key,value})
}
console.log(hashMap("mama"));
console.log(hashMap("amam"));
console.log(hashMap("daftar"))
console.log(hashing);