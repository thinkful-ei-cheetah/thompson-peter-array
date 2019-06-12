/* eslint-disable indent */
'use strict'

const Mem = require('./memory');

const memory = new Mem();

class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
        this._capacity = 0;
    }

    _resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size)
        if(this.ptr === null){
            throw new Error ('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    push(value){
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        this._resize(this.length + 1);
        memory.set(this.ptr, this.length, value);
        this.length++;
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);
    arr.push(6);
    console.log(arr.get(0))
    
    // console.log(memory.get(78));
}

main();