

  const rlp = require('rlp');
  const keccak = require('keccak');

  var nonce = 0x3; //The nonce must be a hex literal!
  var sender = '0x1A60741EDF28c7e5B3A820Eee00f84D9F80aC447'; //Requires a hex string as input!

  var input_arr = [ sender, nonce ];
  var rlp_encoded = rlp.encode(input_arr);

  var contract_address_long = keccak('keccak256').update(rlp_encoded).digest('hex');

  var contract_address = contract_address_long.substring(24); //Trim the first 24 characters.
  console.log("contract_address: " + contract_address);
