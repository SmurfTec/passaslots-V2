import { CSSObject, MantineTheme } from '@mantine/core';

export const globalStyles = (theme: MantineTheme): CSSObject => {
  return {
    html: {
      scrollBehavior: 'smooth',
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: '#150B2E',
      color: '#FFFFFF',
      lineHeight: '1.5',
      fontSize: '1.8rem',
    },
  };
};
