pragma solidity =0.5.16;

import '../MojoswapERC20.sol';

contract ERC20 is MojoswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
