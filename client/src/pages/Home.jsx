import { Box, Image, VStack } from '@chakra-ui/react';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

const Home = () => (
  <Box bg="black">
    <NavBar />
    <VStack>
      <Image
        src="https://raw.githubusercontent.com/PoCInnovation/Pool-2022-Blockchain/main/.github/assets/PoCEther-homePage-BG-name.png?token=GHSAT0AAAAAABNNUAKP473W4ITCI2VYSTAUYQO2ZOA"
        w="80%"
      />
    </VStack>
    <Footer />
  </Box>
);

export default Home;
