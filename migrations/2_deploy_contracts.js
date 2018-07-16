const demoContracts = artifacts.require('./GetSet.sol');

console.log("demoContracts...",demoContracts)
module.exports = function(deployer){
    console.log("dployr....",deployer)
    deployer.deploy(demoContracts);
}
