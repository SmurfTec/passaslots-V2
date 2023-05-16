import { Container, Flex, Text, Title, BackgroundImage, createStyles, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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

  backdropMobile: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/header/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '70vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

export const MiddleHeading = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 770px)', true);
  return (
    <>
      {!matches && (
        <div
          className={classes.backdrop}
          style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
        >
          <Container fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69}>
            <Flex py={120} mih={50} gap="md" justify="center" align="flex-start" direction="column" wrap="wrap">
              <Title
                mb={50}
                color={'white'}
                maw={800}
                className="font-[700] uppercase xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[50px] sm:!leading-[30px] xs:!leading-[25px]"
              >
                More ACCESS from the touch of a finger
              </Title>
              <Text
                color={'white'}
                className="xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[50px] sm:!leading-[25px] xs:!leading-[25px] font-[400]"
                mt={0}
                maw={700}
              >
                This is where gaming creators meet life-long gamers. So we understand your daily frustrations when it
                comes to payments above all. We offer a variety of safe and secure payment methods to choose
                <span className="font-[700]">
                  {' '}
                  from when it comes to deposits and withdrawals. View our full list of payment methods that can{' '}
                </span>{' '}
                be used in your region, and learn how to make deposits and withdrawals at Pasa Slots (as gamers
                ourselves being in the industry for 20+ years we built this on the forefront of customer satisfaction).
              </Text>
            </Flex>
          </Container>
        </div>
      )}
      {matches && (
        <div
          className={classes.backdropMobile}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '70px',
            textAlign: 'center',
            zIndex: 50,
            boxShadow: '-1px 0px 20px 3px #016BE6',
            borderTop: '6px solid #016BE6',
            // marginLeft: '5px',
            // marginRight: '5px',
          }}
        >
          {' '}
          <Title
            color={'white'}
            className="font-[700] uppercase xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[50px] sm:!leading-[30px] xs:!leading-[25px]"
          >
            More ACCESS from the touch of a finger
          </Title>
          <Text
            color={'white'}
            className="xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[50px] sm:!leading-[25px] xs:!leading-[25px] font-[400]"
            mt={40}
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
          <Image src={'/images/pages/home/middleHeadingLarge.png'} alt="hightide" width="100%" height="70%" />
        </div>
      )}
    </>
  );
};
