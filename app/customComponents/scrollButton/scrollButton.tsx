import { ActionIcon, clsx, createStyles,Image } from '@mantine/core';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';

type ScrollButtonProps = {
  pointerPosition: 'UP' | 'DOWN';
  className?: string;
};

export const ScrollButton = ({ className, pointerPosition }: ScrollButtonProps) => {
  const { classes } = useStyles();
  const [, scrollTo] = useWindowScroll();
  const { height } = useViewportSize();
  return (
    <div className={clsx(className, classes.scrollStyle)}>
      <ActionIcon
        variant="transparent"
        onClick={() => (pointerPosition === 'UP' ? scrollTo({ y: 0 }) : scrollTo({ y: height * 100 }))}
      >
        <Image
          alt="pointer"
          src={pointerPosition === 'DOWN' ? '/images/scroll/mouseScroll.png' : '/images/scroll/scrollTop.png'}
          height={72}
          width={30}
        />
      </ActionIcon>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  scrollStyle: {
    
    [theme.fn.smallerThan(810)]: {
      display: 'none',
    },
  },
}));
