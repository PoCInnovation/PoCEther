import { Grid, GridItem } from '@chakra-ui/react';

import ChallengeCard from './ChallengeCard';

const ChallengeList = ({ levels }) => (
  <Grid
    templateColumns={{
      base: 'repeat(1, 1fr)',
      xl: 'repeat(2, 1fr)',
      '2xl': 'repeat(3, 1fr)',
      '4xl': 'repeat(4, 1fr)',
      '5xl': 'repeat(5, 1fr)',
    }}
    gap="16px"
  >
    {levels.map((level) => (
      <GridItem key={level.name}>
        <ChallengeCard level={level} />
      </GridItem>
    ))}
  </Grid>
);

export default ChallengeList;
