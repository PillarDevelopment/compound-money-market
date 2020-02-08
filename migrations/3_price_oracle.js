const PriceOracle = artifacts.require("./PriceOracle.sol");

require('dotenv').config();
const delay = require('delay');

const paused = parseInt( process.env.DELAY_MS || "60000" );

const poster =  process.env.POSTER_ADDRESS;
if(!poster){
  throw("POSTER_ADDRESS is not configured in .env!");
}

const wait = async (param) => {console.log("Delay " + paused); await delay(paused); return param;};

module.exports = function(deployer) {
  deployer.then(async () => {
    await wait();

    await wait(await deployer.deploy(PriceOracle, poster));
  });
};
