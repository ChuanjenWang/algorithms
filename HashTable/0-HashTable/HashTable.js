class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    /**
     * private function
     */
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        
        if (!this.data[address]) {
            this.data[address] = [];
        } 
        this.data[address].push([key, value]);
    }

    get(key) {
        let address = this._hash(key);
        let value = '';

        if(!this.data[address]) return null;

        for(let i = 0; i < this.data[address].length; i ++) {
            if (this.data[address][i][0] === key) {
                value = this.data[address][i][1];
            }
        }
        return value;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++ ) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grages', 10000);
myHashTable.set('apple', 22);
let a = myHashTable.get('apple');
console.log(a);

let keys = myHashTable.keys();
console.log(keys);