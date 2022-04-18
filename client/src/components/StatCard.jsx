import { Progress, Text, Stack, HStack, Heading, Spacer } from '@chakra-ui/react';
import '@fontsource/inter';

import { motion } from 'framer-motion';
import { getPercentage, getNbCompletedChallenges } from '../scripts/PercentageUtils';

const StatCard = ({ level }) => {
  const MotionStack = motion(Stack);

  return (
    <MotionStack
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      py="5%"
      px="5%"
      spacing="5%"
      bg="#030002"
      borderRadius="16px"
    >
      <HStack alignItems="baseline" px="16px">
        <Text color="white" textAlign="left" fontSize="2xl">
          {level.type}
        </Text>
        <Spacer />
        <Heading color="white" fontSize="4xl" letterSpacing="-0.1em" fontFamily="Inter">
          {getNbCompletedChallenges(level)}
        </Heading>
        <Text color="white" fontSize="2xl">
          /{level.levels.length}
        </Text>
      </HStack>
      <ColorProgress percentage={getPercentage(level)} />
    </MotionStack>
  );
};

const ColorProgress = ({ percentage }) => {
  if (percentage < 50) {
    return <Progress variant="black" colorScheme="red" value={percentage} w="100%" size="xs" />;
  }
  if (percentage < 75) {
    return <Progress variant="black" colorScheme="yellow" value={percentage} w="100%" size="xs" />;
  }
  return <Progress variant="black" colorScheme="green" value={percentage} w="100%" size="xs" />;
};

export default StatCard;
