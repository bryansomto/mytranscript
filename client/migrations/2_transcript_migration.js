const Transcript = artifacts.require("Transcript");
// const TransLib = artifacts.require("TransLib");

module.exports = function(deployer) {
  // deployer.deploy(TransLib);
  deployer.link(/*TransLib,*/ Transcript);
  deployer.deploy(Transcript);
};
