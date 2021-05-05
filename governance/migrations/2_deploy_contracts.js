
const Timelock = artifacts.require("Timelock");
// const FeeToSetter = artifacts.require("FeeToSetter");
// const FeeTo = artifacts.require("FeeTo");
const GovernorAlpha = artifacts.require("GovernorAlpha");
const SafeMath = artifacts.require("SafeMath");
const Mojo = artifacts.require("Mojo");
// const TreasuryVester = artifacts.require("TreasuryVester");
module.exports = async function (deployer, network, adresses) {


  // deployer.deploy(FeeToSetter);
  // deployer.deploy(FeeTo);
  // await deployer.deploy(Timelock, "0x32d41f905037c3b0722681f3af98a2621de3ce3c", 172800);
  // const timelock = await Timelock.deployed();
  // const timeadd = await timelock.address;
  // console.log(timeadd);
  // await deployer.deploy(Mojo,adresses[0],adresses[0],1619260088);
  // const mojo = await Mojo.deployed();
  // const mojoadd= await mojo.address;
  // console.log(mojoadd);
   const timeadd= "0x02Be08c62a7bA137Ce1AA61cad8a2588e898bb1f";
   const mojoadd = "0xFB439315eE018e0774e6B0DA3D6aFdDd62BAacC9";



  await deployer.deploy(GovernorAlpha,timeadd,mojoadd);
  const gov= await GovernorAlpha.deployed();
  const govadd = await gov.address;

  // deployer.deploy(TreasuryVester);
};
