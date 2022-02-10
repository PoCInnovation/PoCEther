import { useEffect, useState } from 'react';

import { Button, Box } from '@chakra-ui/react';

import { checkWeb3, deployChallenge, getInstance } from 'scripts/BlockchainUtils';
import contracts from 'contracts';

const ChallengeButton = ({ web3, level }) => {
  const [instance, setInstance] = useState(JSON.parse(localStorage.getItem(level.name) || null));

  useEffect(() => {
    if (instance) console.log(`${level.asciiArt} ${level.name}'s instance is: ${instance.address}`);
  }, [instance?.address]);

  const handleValidate = async () => {
    if (instance && !instance.completed) {
      await checkWeb3(web3);
      const platformInstance = await getInstance(web3, contracts.Platform);
      const platformAddress = await platformInstance.address;
      const currentAccount = (await web3.eth.getAccounts())[0];
      const PlatformContract = new web3.eth.Contract(contracts.Platform.abi, platformAddress);
      const result = await PlatformContract.methods
        .submitLevelInstance(instance.address)
        .send({ from: currentAccount });
      console.log(result);
      if (!result.events.LevelCompletedLog) {
        console.log(`${level.name}'s instance has failed`);
      } else {
        const data = { address: instance.address, completed: true };
        localStorage.setItem(level.name, JSON.stringify(data));
        setInstance(data);
        console.log(`${level.name}'s instance has been validated`);
      }
    }
  };

  const handleDeploy = async () => {
    await checkWeb3(web3);
    const platformInstance = await getInstance(web3, contracts.Platform);
    const platformAddress = await platformInstance.address;
    const challengeInstance = await getInstance(web3, contracts[`${level.name}Factory`]);
    const challengeAddress = await challengeInstance.address;

    const result = await deployChallenge(web3, platformAddress, contracts.Platform.abi, challengeAddress, level.value);
    const data = {
      address: result.events.LevelInstanceCreatedLog.returnValues.instance,
      completed: false,
    };
    localStorage.setItem(level.name, JSON.stringify(data));
    console.log(result);
    setInstance(data);
  };

  return (
    <Box>
      <Button onClick={handleDeploy} m="16px">
        {' '}
        Get New Instance{' '}
      </Button>
      {instance && !instance.completed && (
        <Button onClick={handleValidate} m="16px">
          {' '}
          Validate Instance{' '}
        </Button>
      )}
    </Box>
  );
};

export default ChallengeButton;
