require("@nomicfoundation/hardhat-toolbox")
require("./tasks/block-number")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
    solidity: "0.8.8",
    networks: {
        hardhat: {},
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        localhost: {
            url: process.env.LOCALHOST_RPC_URL,
            chainId: 31337,
        }
    },
}
