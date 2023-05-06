import { Container, Flex, Text, Title, BackgroundImage, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/pages/home/middleHeadingImga.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '80vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

export const MiddleHeading = () => {
  const { classes } = useStyles();
  return (
    <div
      className={classes.backdrop}
      style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Container fluid ml={90} mr={69}>
        <Flex py={120} mih={50} gap="md" justify="center" align="flex-start" direction="column" wrap="wrap">
          <Title
            mb={50}
            color={'white'}
            order={2}
            maw={800}
            className="font-bold uppercase"
            style={{ fontWeight: '700', fontSize: '48px' }}
          >
            More ACCESS from the touch of a finger
          </Title>
          <Text
            color={'white'}
            className="leading-10 font[-400]"
            size={'md'}
            mt={0}
            maw={700}
            style={{ fontSize: '20px', fontWeight: '400' }}
          >
            This is where gaming creators meet life-long gamers. So we understand your daily frustrations when it comes
            to payments above all. We offer a variety of safe and secure payment methods to choose
            <span className="font-[700]">
              {' '}
              from when it comes to deposits and withdrawals. View our full list of payment methods that can{' '}
            </span>{' '}
            be used in your region, and learn how to make deposits and withdrawals at Pasa Slots (as gamers ourselves
            being in the industry for 20+ years we built this on the forefront of customer satisfaction).
          </Text>
        </Flex>
      </Container>
    </div>
  );
};
