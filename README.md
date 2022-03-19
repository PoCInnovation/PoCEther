# PoCEther

A front-end to use cyber security blockchain challenges.

## Installation :wrench:

- Install [Nodejs](https://nodejs.org/en/download/)
- Install [Truffle](https://trufflesuite.com/docs/truffle/getting-started/installation)
- Setup the .env in the root of the repository
- Setup the .env in the client directory
- Install ganache if you wants to dev on local

## Quickstart Testnet ⏩

- Deploy the challenges factories :rocket:
```
yarn start
```

or if you wants to deploy on local

```
yarn run dev
```

- Start the client :rocket:
```
yarn client
```

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
