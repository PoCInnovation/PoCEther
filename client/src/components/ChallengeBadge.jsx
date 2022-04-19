import { Badge } from '@chakra-ui/react';

const ChallengeBadge = ({ level }) => {
  const instance = JSON.parse(localStorage.getItem(level.name) || null);

  if (instance && instance.completed)
    return (
      <Badge variant="subtle" colorScheme="green" size="medium">
        Validated
      </Badge>
    );
  return (
    <Badge variant="subtle" colorScheme="red" size="medium">
      Not validated
    </Badge>
  );
};

export default ChallengeBadge;
