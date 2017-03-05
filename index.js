import { SHA256 } from 'cyrpto-js';


const createHash = (index, last, data, timestamp) => {
	return SHA256(last + index + data + timestamp).toString();
};

const createBlock = (data) => {
	const lastBlock = getLastBlock();
	const nextIndex = lastBlock.index + 1;
	const nextTimestamp = Date.now() / 1000;
	const nextHash = createHash(nextIndex, lastBlock.hash, data, nextTimestamp);
	return new Block(nextHash, lastBlock.hash, nextIndex, dara, nextTimestamp);
};


class Block {
	constructor(hash, last, index, data, timestamp){
		this.hash = hash.toString();
		this.last = last.toString();
		this.index = index;
		this.data = data;
		this.timestamp = timestamp;	
	}

}

//naive in memory blockchain
const blockchain = [new Block("0", "B877BEC97D9C1AF7C26CCF3B0E2D3E10B1A2037FE3B1DD6FC8334F1F42E29833", 0, "genesis", , 1488736885)];


