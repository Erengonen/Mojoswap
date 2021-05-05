const Factory = artifacts.require ("MojoswapFactory.sol");
const Pair = artifacts.require("MojoswapPair.sol");


module.exports = async function (deployer, network, adresses) {
	await deployer.deploy(Factory, adresses[0]);
	const factory = await Factory.deployed();

	let factoryAddress;
	if(network === 'mainnet') {
		factoryAddress = '';

	} else {

	}
	const getHash = await factory.pairCodeHash();
	console.log(getHash);
	// await deployer.deploy(Pair);
	// const pair = await Pair.deployed();
	};
