const Router = artifacts.require("MojoswapRouter02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;

  const FACTORY_ADDRESS = '0x2c2E0444cDf4c162344038b42a5EF6ebD130ff30';


  // const FACTORY_ADDRESS = '0x4E74b29E0Af0530B8F83a295227E984D3e6Ef981';

  if(network === 'mainnet') {
	weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
  } else if(network == 'goerli'){
    weth = await  WETH.at('0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6');
  } else {
	// await deployer.deploy(WETH);
	// weth = await WETH.deployed();
}
  await deployer.deploy(Router, FACTORY_ADDRESS, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6");

};
