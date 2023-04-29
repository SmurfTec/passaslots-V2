import { MantineTheme, MantineThemeOverride, Grid } from '@mantine/core';

export const createThemeoverride = (): MantineThemeOverride => {
  return {
    colorScheme: 'light',
    fontFamily: 'Roboto',
    primaryColor: 'dark',
    headings: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      sizes: {
        h1: { fontSize: '96px', lineHeight: '112px', fontWeight: '700' },
        h2: { fontSize: '48px', lineHeight: '51.38px', fontWeight: '700' },
        h3: { fontSize: '36px', lineHeight: '43.15px', fontWeight: undefined },
        h4: { fontSize: '24px', lineHeight: 1.5, fontWeight: undefined },
        h5: { fontSize: '18px', lineHeight: 1.5, fontWeight: undefined },
        h6: { fontSize: '16px', lineHeight: 1.5, fontWeight: undefined },
      },
    },
    fontSizes: {
      xs: '9px',
      sm: '13px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
    components: {
      Grid: {
        defaultProps: {
          m: 0
        }
      }
    }
    
  };
};
