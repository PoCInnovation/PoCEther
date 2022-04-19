import { useHistory } from 'react-router-dom';

import { HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import ChallengeBadge from './ChallengeBadge';

const ChallengeCard = ({ level }) => <ResponsiveChallengeCard level={level} />;

const ResponsiveChallengeCard = ({ level }) => {
  const isSmallCardNeeded = useBreakpointValue({ base: true, xs: true, xl: false });
  const history = useHistory();
  const MotionHStack = motion(HStack);
  const MotionVStack = motion(VStack);

  if (isSmallCardNeeded) {
    return (
      <MotionVStack
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        animate={{ opacity: 1 }}
        align="center"
        bg="black"
        px="32px"
        py="24px"
        cursor="pointer"
        borderRadius="15px"
        onClick={() => {
          history.push(`/level/${level.name}`);
        }}
      >
        <Text color="white" fontSize="16px" fontWeight="700" w="70%" textAlign="center">
          {level.name}
        </Text>
        <ChallengeBadge level={level} maxW="30%" />
      </MotionVStack>
    );
  }
  return (
    <MotionHStack
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      animate={{ opacity: 1 }}
      align="center"
      bg="black"
      px="32px"
      py="24px"
      cursor="pointer"
      borderRadius="15px"
      onClick={() => {
        history.push(`/level/${level.name}`);
      }}
    >
      <Text color="white" fontSize="16px" fontWeight="700" w="70%" textAlign="center">
        {level.name}
      </Text>
      <ChallengeBadge level={level} maxW="30%" />
    </MotionHStack>
  );
};

export default ChallengeCard;
