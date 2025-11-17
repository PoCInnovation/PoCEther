import Web3 from 'web3';

import TruffleContract from '@truffle/contract';

const initWeb3 = async (setWeb3) => {
  let web3Provider;
  // Modern dapp browsers...
  if (window.ethereum) {
    web3Provider = window.ethereum;
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      // User denied account access...
      console.error('User denied account access');
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3Provider = window.web3.currentProvider;
  }
  // If no injected web3 instance is detected, fall back to Anvil
  else {
    const rpcUrl = process.env.REACT_APP_RPC_URL || 'http://localhost:8545';
    web3Provider = new Web3.providers.HttpProvider(rpcUrl);
  }
  setWeb3(new Web3(web3Provider));
};

const checkWeb3 = async (web3) => {
  const chainId = await web3.eth.getChainId();
  const aimedChain = process.env.REACT_APP_CHAIN_ID;
  const networkName = process.env.REACT_APP_NETWORK_NAME || 'the correct network';

  if (chainId.toString() !== aimedChain) {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${parseInt(aimedChain, 10).toString(16)}` }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          console.error(`Please add ${networkName} (Chain ID: ${aimedChain}) to MetaMask`);
          window.alert(`Please add ${networkName} network to MetaMask.\nChain ID: ${aimedChain}`);
        } else {
          console.error('Failed to switch network:', switchError);
        }
      }
    } else {
      window.alert(`Please switch to ${networkName} (Chain ID: ${aimedChain})`);
    }
  }
};

const getInstance = async (web3, contractJSON) => {
  const contract = TruffleContract(contractJSON);

  await contract.setProvider(web3.currentProvider);
  await contract.setNetwork(process.env.REACT_APP_NETWORK_ID);

  const result = await contract.deployed();

  return result;
};

const deployChallenge = async (web3, platformAddress, platformAbi, challengeFactoryAdress, value) => {
  const currentAccount = (await web3.eth.getAccounts())[0];
  const PlatformContract = new web3.eth.Contract(platformAbi, platformAddress);

  const result = await PlatformContract.methods
    .createLevelInstance(challengeFactoryAdress)
    .send({ from: currentAccount, value: web3.utils.toWei(value, 'ether') });

  return result;
};

export { initWeb3, checkWeb3, getInstance, deployChallenge };
