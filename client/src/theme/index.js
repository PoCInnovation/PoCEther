import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// Foundation overrides
import fonts from './foundations/fonts';
import colors from './foundations/colors';
import radius from './foundations/borderRadius';
import shadows from './foundations/shadows';

import Progress from './components/progress';
import Badge from './components/badge';

const breakpoints = createBreakpoints({
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1680px',
  '4xl': '1920px',
  '5xl': '2560px',
});

const overrides = {
  shadows,
  fonts,
  radius,
  colors,
  breakpoints,
  components: {
    Progress,
    Badge,
  },
};

export default extendTheme(overrides);
