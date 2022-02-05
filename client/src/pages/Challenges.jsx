import { Text, Box } from '@chakra-ui/react';

import ChallengesList from 'components/ChallengesList';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import levelsData from 'gamedata/levels.json';

const Challenges = () => (
  <Box>
    <NavBar />
    <Box marginLeft="100px" marginRight="100px" marginTop="60px">
      {levelsData.map((levels) => (
        <Box key={levels.type} paddingY="30px">
          <Text fontSize="3xl">{levels.type}</Text>
          <Box paddingX="20px" paddingTop="5px">
            <ChallengesList levels={levels.levels} />
          </Box>
        </Box>
      ))}
    </Box>
    <Footer />
  </Box>
);

export default Challenges;
