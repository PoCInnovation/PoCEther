import { useEffect, useState } from 'react';

import { Button, Box, useToast } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { checkWeb3, deployChallenge, getInstance } from 'scripts/BlockchainUtils';
import contracts from 'contracts';

const ChallengeButton = ({ web3, level }) => {
  const [instance, setInstance] = useState(JSON.parse(localStorage.getItem(level.name) || null));
  const toast = useToast();
  const MotionBox = motion(Box);

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
        toast({
          title: `${level.name} not validated`,
          status: 'error',
          duration: 2500,
          isClosable: true,
        });
      } else {
        const data = { address: instance.address, completed: true };
        localStorage.setItem(level.name, JSON.stringify(data));
        setInstance(data);
        console.log(`${level.name}'s instance has been validated`);
        toast({
          title: `${level.name} validated`,
          status: 'success',
          duration: 2500,
          isClosable: true,
        });
      }
    }
  };

  const handleDeploy = async () => {
    await checkWeb3(web3);
    const platformInstance = await getInstance(web3, contracts.Platform);
    const platformAddress = await platformInstance.address;
    const challengeInstance = await getInstance(web3, contracts[`${level.name}Factory`]);
    const challengeAddress = await challengeInstance.address;

    toast({
      title: `Deploying ${level.name}`,
      status: 'info',
      duration: 2500,
      isClosable: true,
    });
    toast({
      title: `Do not refresh the page until it's finished!!`,
      status: 'warning',
      duration: 2500,
      isClosable: true,
    });
    const result = await deployChallenge(web3, platformAddress, contracts.Platform.abi, challengeAddress, level.value);
    const data = {
      address: result.events.LevelInstanceCreatedLog.returnValues.instance,
      completed: false,
    };
    localStorage.setItem(level.name, JSON.stringify(data));
    console.log(result);
    setInstance(data);
    toast({
      title: `${level.name} deployed`,
      status: 'success',
      duration: 2500,
      isClosable: true,
    });
  };

  return (
    <MotionBox initial={{ opacity: 0 }} transition={{ duration: 1, delay: 0.6 }} animate={{ opacity: 1 }}>
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
    </MotionBox>
  );
};

export default ChallengeButton;
