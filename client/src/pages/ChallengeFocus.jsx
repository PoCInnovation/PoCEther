import { useParams } from 'react-router-dom';

import { Box, Divider, Text, VStack } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import NavBar from 'components/NavBar';
import ChallengeButton from 'components/ChallengeButton';
import Footer from 'components/Footer';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import mainContracts from 'contracts/mainContracts';
import levelsData from 'gamedata/levels.json';

const ChallengeFocus = ({ web3 }) => {
  let currentLevel;
  const { name } = useParams();
  const MotionBox = motion(Box);
  const MotionText = motion(Text);
  const MotionDivider = motion(Divider);

  levelsData.forEach((levels) =>
    levels.levels.forEach((level) => {
      if (level.name === name) currentLevel = level;
    }),
  );

  return (
    <Box>
      <NavBar />
      <VStack>
        <MotionBox
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          align="center"
          my="64px"
          w="75%"
          bg="#212121"
          p="32px"
          borderRadius="8px"
        >
          <Box>
            <MotionText
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              animate={{ opacity: 1 }}
              fontSize="24px"
              fontWeight="700"
              color="white"
              pb="16px"
            >
              {currentLevel.name}
            </MotionText>
            <MotionDivider
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              animate={{ opacity: 1 }}
              w="70%"
            />
            <ChallengeButton web3={web3} level={currentLevel} />
            <MotionText
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              animate={{ opacity: 1 }}
              mb="16px"
              color="white"
            >
              {currentLevel.description}
            </MotionText>
          </Box>
          {currentLevel.code.map((file) => (
            <MotionBox
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              animate={{ opacity: 1 }}
              key={mainContracts[`${file}`].contractName}
              align="left"
              w="75%"
              mb="32px"
            >
              <SyntaxHighlighter style={atomOneDarkReasonable} language="solidity" showLineNumbers="true">
                {mainContracts[`${file}`].source}
              </SyntaxHighlighter>
            </MotionBox>
          ))}
          <Text textColor="#212121">{currentLevel.hiddenMsg}</Text>
        </MotionBox>
      </VStack>
      <Footer />
    </Box>
  );
};

export default ChallengeFocus;
