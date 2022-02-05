/* eslint-disable dot-notation */
import { useParams } from 'react-router-dom';

import { Box, Divider, Text } from '@chakra-ui/react';

import NavBar from 'components/NavBar';
import ChallengeButton from 'components/ChallengeButton';
import Footer from 'components/Footer';

import levelsData from 'gamedata/levels.json';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import mainContracts from 'contracts/mainContracts';

const ChallengeFocus = ({ web3 }) => {
  let currentLevel;
  const { name } = useParams();

  levelsData.forEach((levels) =>
    levels.levels.forEach((level) => {
      if (level.name === name) currentLevel = level;
    }),
  );

  return (
    <Box>
      <NavBar />
      <Box align="center" mt="32px">
        <Box>
          <Text fontSize="24px" fontWeight="700">
            {currentLevel.name}
          </Text>
          <Divider w="60%" />
          <ChallengeButton web3={web3} level={currentLevel} />
          <Text mb="16px">{currentLevel.description}</Text>
        </Box>
        {currentLevel.code.map((file) => (
          <Box key={mainContracts[`${file}`].contractName} align="left" w="75%" mb="32px">
            <SyntaxHighlighter style={atomOneDarkReasonable} language="solidity" showLineNumbers="true">
              {mainContracts[`${file}`].source}
            </SyntaxHighlighter>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default ChallengeFocus;
