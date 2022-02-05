import { Link } from 'react-router-dom';

import { Box, HStack, Image, Text, VisuallyHidden } from '@chakra-ui/react';

import Logo from 'assets/images/POC_white_transparent.png';

const NavBar = () => (
  <Box zIndex={100} height="80px !important" minH="80px !important">
    <Box as="nav" w="100vw" h="80px" bg="black" position="fixed" left="0" top="0">
      <HStack justify="space-between" align="center" w="100%" h="100%" px={{ base: '24px', md: '40px' }}>
        <Link to="/">
          <Image src={Logo} h="34px" />
        </Link>
        <HStack justify="center" spacing="50px" w="100%" h="100%" px={{ base: '24px', md: '40px' }}>
          <Link to="/">
            <Text textColor="hsla(0,0%,100%,.5)" _hover={{ textColor: '#A0AEC0' }}>
              Home
            </Text>
          </Link>
          <Link to="/levels">
            <Text textColor="hsla(0,0%,100%,.5)" _hover={{ textColor: '#A0AEC0' }}>
              Challenges
            </Text>
          </Link>
          <Link to="/help">
            <Text textColor="hsla(0,0%,100%,.5)" _hover={{ textColor: '#A0AEC0' }}>
              Help
            </Text>
          </Link>
        </HStack>
        <VisuallyHidden />
      </HStack>
    </Box>
  </Box>
);

export default NavBar;
