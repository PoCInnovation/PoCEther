/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider");

// Environment variables
const privateKey = process.env["PRIVATE_KEY"];
const mnemonic = process.env["MNEMONIC"];
const anvilHost = process.env["ANVIL_HOST"] || "127.0.0.1";
const anvilPort = process.env["ANVIL_PORT"] || 8545;
const sepoliaRpcUrl = process.env["SEPOLIA_RPC_URL"];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  contracts_build_directory: "./client/src/contracts",
  networks: {
    // Anvil - Foundry's local Ethereum node (replaces Ganache)
    // Run with: anvil
    // Default chainId: 31337
    anvil: {
      host: anvilHost,
      port: anvilPort,
      network_id: "*",       // Match any network id
      gas: 30000000,         // High gas limit for local testing
      gasPrice: 0,           // Free gas on local network
      from: undefined,       // Use the first account from Anvil
    },

    // Development network (for backward compatibility)
    // Points to Anvil by default
    development: {
      host: anvilHost,
      port: anvilPort,
      network_id: "*",
      gas: 30000000,
      gasPrice: 0,
    },

    // Sepolia Testnet - Official Ethereum testnet (replaces deprecated Rinkeby)
    // Get Sepolia ETH from: https://sepoliafaucet.com/
    sepolia: {
      provider: () => {
        const accountKey = mnemonic || privateKey;
        if (!accountKey) {
          throw new Error("Please set MNEMONIC or PRIVATE_KEY in .env file");
        }
        if (!sepoliaRpcUrl) {
          throw new Error("Please set SEPOLIA_RPC_URL in .env file");
        }
        return new HDWalletProvider(accountKey, sepoliaRpcUrl);
      },
      network_id: 11155111,  // Sepolia network id
      gas: 4000000,
      gasPrice: 10000000000, // 10 gwei
      confirmations: 2,      // Wait 2 blocks before considering tx confirmed
      timeoutBlocks: 200,    // Wait 200 blocks before timing out
      skipDryRun: true       // Skip dry run before migrations
    },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 200
      },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
