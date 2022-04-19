import { Box, Image, VStack } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

const Home = () => {
  const MotionImage = motion(Image);
  const MotionVStack = motion(VStack);

  return (
    <Box>
      <NavBar />
      <MotionVStack
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, transition: { delay: 0.3 } }}
        bg="black"
      >
        <MotionImage
          initial={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          src="https://raw.githubusercontent.com/PoCInnovation/Pool-2022-Blockchain/main/.github/assets/PoCEther-homePage-BG-name.png?token=GHSAT0AAAAAABNNUAKP473W4ITCI2VYSTAUYQO2ZOA"
          w="80%"
        />
      </MotionVStack>
      <Footer />
    </Box>
  );
};

export default Home;
