import { Box, Grid, Heading, HStack, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

import { motion } from 'framer-motion';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

const Help = () => {
  const MotionGrid = motion(Grid);
  const MotionVStack = motion(VStack);
  const MotionBox = motion(Box);

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
          }}
          gap="32px"
          bg="#212121"
          p="32px"
          w="75%"
          borderRadius="8px"
        >
          <MotionVStack
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          >
            <Text color="white">
              PoCEther is a Web3/Solidity platform, played in the Ethereum Virtual Machine. Each level is a smart
              contract that needs to be &apos;hacked&apos;.
            </Text>
            <MotionBox
              pt="32px"
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
            >
              <Heading as="h1" size="lg" color="white">
                Before using PoCEther, you need some configuration:
              </Heading>
              <Heading as="h2" size="md" pt="16px" color="white">
                1. Set up MetaMask
              </Heading>
              <UnorderedList>
                <ListItem color="white" ml="16px">
                  If you don&apos;t have it already, install the MetaMask browser extension (in Chrome, Firefox, Brave
                  or Opera on your desktop machine).
                </ListItem>
                <ListItem color="white" ml="16px">
                  Set up the extension&apos;s wallet and use the network selector to point to the &apos;Ropsten test
                  network&apos; in the top left of the extension&apos;s interface.
                </ListItem>
              </UnorderedList>
              <Heading as="h2" size="md" pt="16px" color="white">
                2. Connect your account between MetaMask & PocEther
              </Heading>
              <UnorderedList>
                <ListItem color="white" ml="16px">
                  Refresh the PoCEther page, normally a MetaMask pop-up will appear asking you to connect an account to
                  PoCEther.
                </ListItem>
              </UnorderedList>
              <Heading as="h2" size="md" pt="16px" color="white">
                3. Get test ether
              </Heading>
              <UnorderedList>
                <ListItem color="white" ml="16px">
                  To play the game, you will need test ether. The easiest way to get some testnet ether is via{' '}
                  <Link href="https://faucet.egorfine.com/" color="#777777">
                    this
                  </Link>
                  ,{' '}
                  <Link href="https://faucet.dimensions.network/" color="#777777">
                    this
                  </Link>{' '}
                  or{' '}
                  <Link href="https://faucet.metamask.io/" color="#777777">
                    this faucet
                  </Link>
                  .
                </ListItem>
                <ListItem color="white" ml="16px">
                  Once you see some ether in your balance, move on to the next step.
                </ListItem>
              </UnorderedList>
              <Heading as="h2" size="md" pt="16px" color="white">
                4. Play the game
              </Heading>
              <UnorderedList>
                <ListItem color="white" ml="16px">
                  Go on the &apos;Challenge&apos; page and select the challenge.
                </ListItem>
                <ListItem color="white" ml="16px">
                  You&apos;ll see the code snippet of the contract and a &apos;Get New Instance&apos; button;
                </ListItem>
              </UnorderedList>
              <Heading as="h2" size="md" pt="16px" color="white">
                5. Getting a level instance
              </Heading>
              <UnorderedList>
                <ListItem color="white" ml="16px">
                  To get a level instance open your browser console (with ctrl+shift+i) and click on the &apos;Get New
                  Instance&apos; button.
                </ListItem>
                <ListItem color="white" ml="16px">
                  Once the button clicked a message will appear in the console with the address of the instance;
                </ListItem>
                <HStack>
                  <WarningIcon color="white" />
                  <Text color="white">The message could take a time to appear.</Text>
                </HStack>
              </UnorderedList>
              <Heading as="h2" size="md" pt="16px" color="white">
                6. Few tips
              </Heading>
              <UnorderedList>
                <ListItem color="white" ml="16px">
                  <Text>
                    Little reminder, you can&apos;t modify the code of the challenge, because of the immutable of the
                    blockchain.
                  </Text>
                </ListItem>
              </UnorderedList>
            </MotionBox>
          </MotionVStack>
        </MotionGrid>
      </VStack>
      <Footer />
    </Box>
  );
};

export default Help;
