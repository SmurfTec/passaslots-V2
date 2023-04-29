import { createStyles } from '@mantine/core';
import { ReactNode } from 'react';

type AppShellProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const useStyles = createStyles((theme) => ({
  divStyle: {
    // marginTop: '-100px',
    [theme.fn.smallerThan(810)]: {
      marginTop: 'unset',
    },
  },
}));

export const AppShell = ({ header, children, footer }: AppShellProps) => {
  const { classes } = useStyles();
  return (
    <>
      {header}
      <div className={classes.divStyle}>{children}</div>
      {footer}
    </>
  );
};
