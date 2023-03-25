//const contractAddress = 'TEKMUKXhkYuwNxa5Y8jpeZCxCrRdDnaSNt' ///// paste (base58) key of SmartContract instead of current key
const contractAddress = 'TToGC6fVkHuXe53HPuKzdPXEA5gweMyQ8W' ///// paste (base58) key of SmartContract instead of current key



const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb, contractAddress) {
        console.log('contractAddress', contractAddress)
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;

