import { Progress, Text, Stack, HStack, Heading, Spacer } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import '@fontsource/inter';

import { getPercentage, getNbCompletedChallenges } from '../scripts/PercentageUtils';

const ColorProgress = ({ percentage }) => {
  if (percentage < 50) {
    return <Progress variant="black" colorScheme="red" value={percentage} w="100%" size="xs" />;
  }
  if (percentage < 75) {
    return <Progress variant="black" colorScheme="yellow" value={percentage} w="100%" size="xs" />;
  }
  return <Progress variant="black" colorScheme="green" value={percentage} w="100%" size="xs" />;
};

const StatCard = ({ level }) => {
  const MotionStack = motion(Stack);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

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
        <MotionText
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0 } }}
          color="white"
          textAlign="left"
          fontSize="2xl"
        >
          {level.type}
        </MotionText>
        <Spacer />
        <MotionHeading
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          color="white"
          fontSize="4xl"
          letterSpacing="-0.1em"
          fontFamily="Inter"
        >
          {getNbCompletedChallenges(level)}
        </MotionHeading>
        <MotionText
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          color="white"
          fontSize="2xl"
        >
          /{level.levels.length}
        </MotionText>
      </HStack>
      <ColorProgress
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        animate={{ opacity: 1 }}
        percentage={getPercentage(level)}
      />
    </MotionStack>
  );
};

export default StatCard;
