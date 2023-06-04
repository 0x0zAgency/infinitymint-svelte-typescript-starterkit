// Please visit docs.infinitymint.app for a more complete starter configuration file
const { readGlobalSession } = require("infinitymint/dist/app/helpers");

const session = readGlobalSession();
/**
 * @type import('infinitymint/dist/app/interfaces').InfinityMintConfig
 */
const config = {
  console: true,
  ipfs: true,
  express: {
    port: 1337,
  },
  hardhat: {
    solidity: {
      version: "0.8.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20,
        },
      },
    },
    networks: {
      ganache: {
        url: "http://127.0.0.1:8545",
        accounts: {
          mnemonic: session.environment.ganacheMnemonic,
        },
      },
      polygon: {
        url: "https://polygon-rpc.com",
        accounts: {
          mnemonic:
            process.env.DEFAULT_WALLET_MNEMONIC ||
            session.environment?.ganacheMnemonic,
        },
      },
      mumbai: {
        url: "https://matic-mumbai.chainstacklabs.com",
        accounts: {
          mnemonic:
            process.env.DEFAULT_WALLET_MNEMONIC ||
            session.environment?.ganacheMnemonic,
        },
      },
    },
    paths: {
      tests: "./tests",
    },
  },
  ganache: {
    chain: {
      chainId: 1337,
    },
    wallet: {
      totalAccounts: 20,
      defaultBalance: 69_420,
    },
  },
  settings: {
    networks: {
      hardhat: {},
      ganache: {},
      polygon: {},
      mumbai: {},
    },
  },
};
module.exports = config;
