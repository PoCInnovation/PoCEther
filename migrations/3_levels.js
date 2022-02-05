const Platform = artifacts.require("Platform");
const BankFactory = artifacts.require("BankFactory");
const BecomeTheNewOwnerFactory = artifacts.require("BecomeTheNewOwnerFactory");
const BecomeTheOwnerFactory = artifacts.require("BecomeTheOwnerFactory");
const GuessMyPasswordFactory = artifacts.require("GuessMyPasswordFactory");
const GuessMyRandomPasswordFactory = artifacts.require("GuessMyRandomPasswordFactory");
const GuessMySecretPasswordFactory = artifacts.require("GuessMySecretPasswordFactory");
const AuctionBugFactory = artifacts.require("AuctionBugFactory");
const IDoNothingFactory = artifacts.require("IDoNothingFactory");
const VaultFactory = artifacts.require("VaultFactory");
const BadAssFactory = artifacts.require("BadAssFactory");
const UltimateFactory = artifacts.require("UltimateFactory");
const OpCodesFactory = artifacts.require("OpCodesFactory");

module.exports = async (deployer) => {
  let platformInstance = await Platform.deployed();

  await deployer.deploy(BankFactory);
  await platformInstance.registerLevel((await BankFactory.deployed()).address)
  await deployer.deploy(BecomeTheNewOwnerFactory);
  await platformInstance.registerLevel((await BecomeTheNewOwnerFactory.deployed()).address)
  await deployer.deploy(BecomeTheOwnerFactory);
  await platformInstance.registerLevel((await BecomeTheOwnerFactory.deployed()).address)
  await deployer.deploy(GuessMyPasswordFactory);
  await platformInstance.registerLevel((await GuessMyPasswordFactory.deployed()).address)
  await deployer.deploy(GuessMyRandomPasswordFactory);
  await platformInstance.registerLevel((await GuessMyRandomPasswordFactory.deployed()).address)
  await deployer.deploy(GuessMySecretPasswordFactory);
  await platformInstance.registerLevel((await GuessMySecretPasswordFactory.deployed()).address)
  await deployer.deploy(AuctionBugFactory);
  await platformInstance.registerLevel((await AuctionBugFactory.deployed()).address)
  await deployer.deploy(IDoNothingFactory);
  await platformInstance.registerLevel((await IDoNothingFactory.deployed()).address)
  await deployer.deploy(VaultFactory);
  await platformInstance.registerLevel((await VaultFactory.deployed()).address)
  await deployer.deploy(BadAssFactory);
  await platformInstance.registerLevel((await BadAssFactory.deployed()).address)
  await deployer.deploy(UltimateFactory);
  await platformInstance.registerLevel((await UltimateFactory.deployed()).address)
  await deployer.deploy(OpCodesFactory);
  await platformInstance.registerLevel((await OpCodesFactory.deployed()).address)
};