import { Box, Grid, VStack } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import levelsData from 'gamedata/levels.json';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';

const Stats = () => {
  const MotionGrid = motion(Grid);

  return (
    <Box>
      <NavBar />
      <VStack mt="120px">
        <MotionGrid
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -50, transition: { delay: 0.3, duration: 0.8 } }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            xl: 'repeat(3, 1fr)',
          }}
          gap="32px"
          bg="#212121"
          p="32px"
          w="75%"
          borderRadius="8px"
        >
          {levelsData.map((level) => (
            <StatCard key={level.type} level={level} percentage={20} />
          ))}
        </MotionGrid>
      </VStack>
      <Footer />
    </Box>
  );
};

export default Stats;
