const web3 = require('web3');
const contract = require('truffle-contract');
const jsonFile = require('jsonfile');
const web3Conn = new web3(new web3.providers.HttpProvider('http://localhost:8545'));

web3Conn.eth.getCoinbase().then((address)=>{
    coinbase = address
})

const json = jsonFile.readFileSync('./build/contracts/GetSet.json');
const getSetContract = contract(json);
getSetContract.setProvider(web3Conn.currentProvider);
getSetContract.currentProvider.sendAsync = function(){
    return getSetContract.currentProvider.send.apply(getSetContract.currentProvider, arguments);
}

async function set(data){
    try{
        let instance = await getSetContract.deployed();
        let setData = await instance.set(data.name, data.contact, data.age, {from:coinbase, gas:300000});
        return setData.receipt.status;
    }catch(e){
        throw e;
    }
}

async function get(){
    try{
        let instance = await getSetContract.deployed();
        let getData = await instance.get({from:coinbase});
        return getData;
    }catch(e){
        throw e;
    }
}

module.exports.set = set;
module.exports.get = get;