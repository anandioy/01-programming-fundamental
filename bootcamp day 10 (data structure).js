class Stack {
    #maxSize;
    #container = [];

    constructor(maxSize = 10) {
        this.#maxSize = maxSize;

    }

    #isFull(){
        console.log(this.#container.length >= this.maxSize);
        return this.#container.length >= this.#maxSize;
    }

    #isEmpty() {
        return this.#container.length === 0;
    }

    push(element){
        if (this.#isFull()) return console.log("stack overflow");

        this.#container.push(element);
    }

    pop(){
        if (this.#isEmpty())return console.log("Stack underflow")
        this.#container.pop();

    }

    getElement(){
        return this.#container;

    }
}

const stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(13);
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(1);

console.log(stack.getElement());

stack.pop();
// last in first out, data yang terakhir masuk akan menjadi pertama yang keluar


console.log(stack.getElement());



// QUEUE 
// FIRST IN FIRST OUT, data item stored first will be accessed first
// yang terakhir masuk terakhir keluar, pertama masuk pertama keluar
// ngantri pertama, dapet barang pertama, cabut pertama
// utk sistem ordering atau antrian
// use case, printer scheduling; yang pertama mau di print dia yang akan di print pertama,
// yang terakhir nunggu dulu ampe dapet giliran
// atau whatsapp ketika gaada internet, dia masuk queue


