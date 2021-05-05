const StakingFact = artifacts.require("StakingRewardsFactory");

// const TreasuryVester = artifacts.require("TreasuryVester");
module.exports = async function (deployer, network, adresses) {

  const mojoAdd = "0xFB439315eE018e0774e6B0DA3D6aFdDd62BAacC9"
  // deployer.deploy(FeeToSetter);
  // deployer.deploy(FeeTo);
  await deployer.deploy(StakingFact,mojoAdd,1619261128);

};
