import { useHistory } from 'react-router-dom';

import { Text, VStack } from '@chakra-ui/react';

const ChallengeCard = ({ level }) => {
  const history = useHistory();

  return (
    <VStack
      align="center"
      spacing="32px"
      px="32px"
      py="24px"
      bg="black"
      cursor="pointer"
      onClick={() => {
        history.push(`/level/${level.name}`);
      }}
    >
      <Text color="white">{level.name}</Text>
    </VStack>
  );
};

export default ChallengeCard;
