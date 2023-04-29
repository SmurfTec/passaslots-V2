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
      backgroundColor: '#F2F2F2',
      color: theme.black,
      lineHeight: '1.5',
      fontSize: '1.8rem',
    },
  };
};
