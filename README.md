# PoCEther

A front-end to use cyber security blockchain challenges.

## 🚀 Quick Start with Docker (Recommended)

The easiest way to run PoCEther is with Docker:

```bash
# 1. Start all services (Anvil + Smart Contracts + Frontend)
docker-compose up

# 2. Open your browser at http://localhost:3000

# 3. Configure MetaMask:
#    - Network: Anvil (localhost)
#    - RPC URL: http://localhost:8545
#    - Chain ID: 31337
#    - Import an Anvil account (private keys shown in Anvil logs)
```

That's it! The platform will automatically:
- Launch Anvil (local Ethereum node)
- Clean old contract artifacts from previous sessions
- Deploy all smart contracts fresh
- Start the React frontend with hot reload

### Stop the platform:
```bash
docker-compose down
```

**Important:** Anvil is an ephemeral blockchain - all data is lost when stopped. When you restart with `docker compose up`, the platform automatically:
- ✅ Cleans old contract artifacts
- ✅ Redeploys all contracts with fresh addresses
- ✅ Resets the blockchain state

If you need to manually clean artifacts:
```bash
./clean-anvil.sh
```

---

## 📋 Manual Installation (Without Docker)

### Prerequisites
- [Node.js 20+](https://nodejs.org/en/download/)
- [Foundry](https://book.getfoundry.sh/getting-started/installation) (for Anvil)
- [Truffle](https://trufflesuite.com/docs/truffle/getting-started/installation)

### Setup

1. **Configure environment variables:**
   ```bash
   # Copy .env examples
   cp .env.example .env
   cp client/.env.example client/.env

   # Edit .env files if needed (default values work for Anvil)
   ```

2. **Install dependencies:**
   ```bash
   # Root dependencies
   npm install

   # Client dependencies
   cd client && npm install && cd ..
   ```

3. **Run the platform:**

   **Terminal 1 - Start Anvil:**
   ```bash
   anvil
   ```

   **Terminal 2 - Deploy contracts:**
   ```bash
   npx truffle migrate --network anvil
   ```

   **Terminal 3 - Start frontend:**
   ```bash
   cd client && npm start
   ```

---

## 🌐 Deploying to Sepolia Testnet

1. **Get Sepolia ETH:**
   - Visit [Sepolia Faucet](https://sepoliafaucet.com/)

2. **Configure .env:**
   ```bash
   # Add your private key or mnemonic
   PRIVATE_KEY=your_private_key_here

   # Add Sepolia RPC URL (get from Infura or Alchemy)
   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
   ```

3. **Configure client/.env:**
   ```bash
   # Uncomment Sepolia configuration
   REACT_APP_NETWORK_ID=11155111
   REACT_APP_CHAIN_ID=11155111
   REACT_APP_NETWORK_NAME=Sepolia
   REACT_APP_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
   ```

4. **Deploy:**
   ```bash
   npx truffle migrate --network sepolia
   ```

---

## 🎮 Using the Platform

You are now ready to access your blockchain security platform !!!

## Deploy new challenge

To be able to deploy a new challenge for the app you are going to need to do a few things

- Add your challenge contract inside contracts/levels and into the subdirectory of your choice depending of the difficulty of the challenge.
- Add factory challenge that will create instances of the challenge based on another factory contract you can find in the contracys/levels directory.
- Add attack contract that will solve the challenge inside contracts/attacks and into the subdirectory of your choice depending of the difficulty of the challenges.
- Add the necessary elements into the client/src/gamedata/levels.json for exemple:
``` json
{
    "name": "BecomeTheNewOwner",
    "description": "The goal of this challenge is to become the owner of the contract.",
    "code": [
        "BecomeTheNewOwner"
    ],
    "value": "0"
},
```
- And the final step is to add the write up of the challenge in markdown type.

## How ? :thinking:

**Technologies 🧑‍💻**
+ [React](https://reactjs.org/docs/getting-started.html)
+ [Chakra UI](https://chakra-ui.com)
+ [Infura](https://infura.io/)
+ [Truffle](https://trufflesuite.com/)
+ [Web3](https://web3js.readthedocs.io)
+ [Ethernaut](https://github.com/OpenZeppelin/ethernaut)

## Our PoC team :ok_hand:

Developers:
| [<img src="https://github.com/lucas-louis.png?size=85" width=85><br><sub>Lucas Louis</sub>](https://github.com/lucas-louis) | [<img src="https://github.com/lolboysg.png?size=85" width=85><br><sub>Matéo Viel</sub>](https://github.com/lolboysg)
| :---: | :---: |

<h2 align=center>
Organization
</h2>

<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories
