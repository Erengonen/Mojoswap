const Governance = artifacts.require("GovernorAlpha");


contract('GovernorAlpha', (adresses) => {
  it('should put 1 proposal', async () => {
    const govInstance = await Governance.deployed();
    const balance = await govInstance.propose([adresses[0]],[1111],["johndoesignature"],["0x6572656e00000000000000000000000000000000000000000000000000000000"],["description"]).send({from:adresses[0]});

    assert.equal(balance.valueOf(), 0, "10000 wasn't in the first account");
  });
})
