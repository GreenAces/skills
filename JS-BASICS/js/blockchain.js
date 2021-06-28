const SHA256 = require('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/node_modules/crypto-js/sha256.js');
/* This code was inspired by the following youtube video
https://www.youtube.com/watch?v=zVqczFZr124&list=WL&index=16
Date: 10/18/2018
NOTE: require() will not work on browser and requires node.js
https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined#19059825*/

class Block {
  constructor(index, timestamp,data, PreviousHash ="") {

    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = "";

  }


  calculateHash() {

    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

  }

}


class Blockchain {
    constructor() {

      this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
      return new Block(0, "10/18/2018", "GenesisBlock", "0");
    }

    getLastestBlock() {
      return this.chain[this.chain.length -1];
    }

    addBlock(newBlock) {
      newBlock.previousHash = this.getLastestBlock().hash
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
    }
}

let Bitcoin = new Blockchain();

Bitcoin.addBlock(new Block(1, "10/18/2018", {Amount: 4}));
Bitcoin.addBlock(new Block(2, "10/19/2018", {Amount: 10}));

console.log(JSON.stringify(Bitcoin,null,4));
