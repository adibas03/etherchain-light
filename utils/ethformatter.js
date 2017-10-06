var BigNumber = require('bignumber.js');

var Ether     = new BigNumber(10e+17);

function formatAmount(amount) {
  var ret = new BigNumber(amount.toString()),
  dec = ret%Ether == 0;
  ret = ret.dividedBy(Ether);
  ret = !dec ? Number(ret).toFixed(20):Number(ret);
  return ret + " ETH";
}
module.exports = formatAmount;
