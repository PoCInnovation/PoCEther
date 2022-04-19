import { Box, Heading, VStack } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import ChallengesList from 'components/ChallengesList';

import levelsData from 'gamedata/levels.json';

const Challenges = () => {
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);

  return (
    <Box>
      <NavBar />
      <MotionBox
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -50, transition: { delay: 0.3, duration: 0.8 } }}
        mx={{ base: '10%', lg: '100px' }}
        mt="64px"
        bg="#212121"
        p="32px"
        borderRadius="8px"
      >
        {levelsData.map((levels) => (
          <Box key={levels.type} pb="32px" pt="8px">
            <VStack>
              <MotionHeading
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                size="lg"
                color="white"
                pb="8px"
              >
                {levels.type}
              </MotionHeading>
            </VStack>
            <Box px="24px" pt="8px" w="100%">
              <ChallengesList levels={levels.levels} />
            </Box>
          </Box>
        ))}
      </MotionBox>
      <Footer />
    </Box>
  );
};

export default Challenges;
