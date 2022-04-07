const CFY = artifacts.require("CFY.sol");
//const BEP20Token = artifacts.require("BEP20Token.sol");

module.exports = function (deployer) {
  deployer.deploy(CFY);
  //deployer.deploy(BEP20Token);
};