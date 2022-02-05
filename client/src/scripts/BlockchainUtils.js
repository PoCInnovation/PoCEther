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
  // If no injected web3 instance is detected, fall back to Ganache
  else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
  }
  setWeb3(new Web3(web3Provider));
};

const checkWeb3 = async (web3) => {
  const chainId = await web3.eth.getChainId();
  const aimedChain = process.env.REACT_APP_CHAIN_ID;

  if (chainId.toString() !== aimedChain)
    if (window.ethereum)
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: parseInt(aimedChain, 10).toString(16) }],
      });
    else window.alert('CHANGE TO RINKEBY');
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
