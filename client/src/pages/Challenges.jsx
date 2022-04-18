import { Box, Heading, VStack } from '@chakra-ui/react';

import ChallengesList from 'components/ChallengesList';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import levelsData from 'gamedata/levels.json';
import { motion } from 'framer-motion';

const Challenges = () => {
  const MotionHeading = motion(Heading);

  return (
    <Box>
      <NavBar />
      <Box marginLeft="100px" marginRight="100px" marginTop="60px" bg="#212121" p="32px" borderRadius="8px">
        {levelsData.map((levels) => (
          <Box key={levels.type} pb="32px" pt="8px">
            <VStack>
              <MotionHeading initial={{ opacity: 0 }} animate={{ opacity: 1 }} size="lg" color="white" pb="8px">
                {levels.type}
              </MotionHeading>
            </VStack>
            <Box px="24px" pt="8px">
              <ChallengesList levels={levels.levels} />
            </Box>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Challenges;
