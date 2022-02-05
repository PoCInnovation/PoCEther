import { useState, useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { initWeb3 } from 'scripts/BlockchainUtils';
import Routes from './Routes';

const App = () => {
  const [web3, setWeb3] = useState();

  useEffect(() => {
    initWeb3(setWeb3);
  }, []);

  return (
    <Box>
      <Routes web3={web3} />
    </Box>
  );
};

export default App;
