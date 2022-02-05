import { Box, Text, Center } from '@chakra-ui/react';

const Footer = () => (
  <Box zIndex={100} height="40px !important" minH="40px !important">
    <Center as="footer" w="100vw" h="40px" bg="black" position="fixed" left="0" bottom="0">
      <Text color="white">Made with love by PoC</Text>
    </Center>
  </Box>
);

export default Footer;
