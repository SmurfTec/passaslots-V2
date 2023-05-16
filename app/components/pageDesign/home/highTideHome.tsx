import { BackgroundImage, Button, Container, Grid, Group, Image, Text, Title, createStyles } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useMediaQuery } from '@mantine/hooks';
import { useBonusModal } from '@pasa/hooks';
import { HomeTopCarousel } from './hometopCarousel';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/header/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // minHeight: '70vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
  backdrop2: {
    [theme.fn.smallerThan(771)]: {
      backgroundImage: "url('/images/header/backgroundImage.png')",
    },
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/pages/home/playallday.png')",
    // backgroundImage: "url('/images/header/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // minHeight: '90vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
  button: {
    [theme.fn.smallerThan(1200)]: {
      marginTop: '20px',
    },
    marginTop: '50px',
  },
  button2: {
    [theme.fn.smallerThan(1400)]: {
      marginTop: '5px',
    },
    [theme.fn.smallerThan(530)]: {
      marginTop: '10px',
    },
    marginTop: '100px',
  },
  rightPanel: {
    [theme.fn.smallerThan(1400)]: {
      width: '500px',
    },
    [theme.fn.smallerThan(530)]: {
      width: '100%',
    },
    width: '50%',
  },
  description: {
    [theme.fn.smallerThan(1400)]: {
      marginTop: '10px',
    },
    [theme.fn.smallerThan(530)]: {
      width: '100%',
    },
    marginTop: '60px',
  },
}));

export function HighTideHome() {
  const [BonusModal, bonusOpen] = useBonusModal();
  const matches = useMediaQuery('(max-width: 770px)', true);
  const { classes } = useStyles();
  return (
    <>
      <div
        className={classes.backdrop}
        style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
      >
        {!matches && (
          <BackgroundImage
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              position: 'relative',
              width: '100%',
            }}
            src="/images/pages/home/highTideImage.png"
          >
            <Container fluid py={matches ? 50 : 100} pl={matches ? 5 : 90} pr={matches ? 5 : 69}>
              <Grid>
                <Grid.Col md={6}>
                  <Title
                    className="font-[700] tracking[-0.015em] w-400 md:w-500 lg:w-560 xs:!text-[32px] sm:!text-[40px] md:!text-[54px] md:!leading-[70px] sm:!leading-[35px] xs:!leading-[35px]"
                    color="white"
                    mt={matches ? 20 : 0}
                    mb={matches ? 20 : 50}
                    style={{ letterSpacing: '-1.5%' }}
                  >
                    RIDE THE HIGH <span className="text-[#50A1FF]">TIDE OF LUCK</span>
                  </Title>
                  <Text
                    color="white"
                    mt={20}
                    className="font-[400] xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[40px] sm:!leading-[20px] xs:!leading-[20px]"
                    maw={628}
                  >
                    To see what kind of winnings are in store for you on the games, Pasa invites all our online and
                    mobile players to launch into playing this slot sensation the moment{' '}
                    <span className="font-[700]">you’ve logged into your unique real money</span> account. You never
                    know, one spin is all it takes to potentially change your life forever!
                  </Text>
                  <div className={classes.button}>
                    <Button
                      component={NextLink}
                      href="games/#gameSlots"
                      px={20}
                      styles={{
                        root: {
                          border: 'none',
                          fontSize: '20px',
                          fontStyle: 'medium',
                          fontWeight: 'normal',
                          color: 'white',
                          // borderColor: '#F6CAA7',
                          '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                        },
                      }}
                      bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
                      size="lg"
                      radius={50}
                      className="font-[500] uppercase"
                    >
                      More on Slot Games
                    </Button>
                  </div>
                </Grid.Col>
              </Grid>
            </Container>
          </BackgroundImage>
        )}
        {matches && (
          <div
            style={{
              display: 'flex',
              marginRight: '5px',
              marginLeft: '5px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '70px',
              textAlign: 'center',
            }}
          >
            <Title
              className="font-[700] tracking[-0.015em] w-400 md:w-500 lg:w-560 xs:!text-[32px] sm:!text-[40px] md:!text-[54px] md:!leading-[70px] sm:!leading-[35px] xs:!leading-[35px]"
              color="white"
              mt={matches ? 20 : 0}
              mb={matches ? 10 : 50}
              style={{ letterSpacing: '-1.5%' }}
            >
              RIDE THE HIGH <span className="text-[#50A1FF]">TIDE OF LUCK</span>
            </Title>
            <Text
              color="white"
              mt={40}
              className="font-[400] xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[40px] sm:!leading-[20px] xs:!leading-[20px]"
            >
              To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile
              players to launch into playing this slot sensation the moment{' '}
              <span className="font-[700]">you’ve logged into your unique real money</span> account. You never know, one
              spin is all it takes to potentially change your life forever!
            </Text>
            <div className={classes.button}>
              <Button
                component={NextLink}
                href="games/#gameSlots"
                px={20}
                styles={{
                  root: {
                    marginTop: '10px',
                    border: 'none',
                    fontSize: '15px  !important',
                    fontStyle: 'medium',
                    fontWeight: 'normal',
                    color: 'white',
                    '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                  },
                }}
                bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
                size="md"
                radius={50}
                className="font-[500] uppercase"
              >
                More on Slot Games
              </Button>
            </div>
            <Image src={'/images/pages/home/highTideImageLarge.png'} alt="hightide" width="100%" mt={70} />
          </div>
        )}
      </div>
      {BonusModal}

      <HomeTopCarousel />

      <div
        className={classes.backdrop2}
        style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
      >
        {!matches && (
          <Container fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69} py={50}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: '50px',
              }}
            >
              <div className={classes.rightPanel}>
                <div className="space-y-1">
                  <Title maw={900} color={'white'} className="font-[700] uppercase mt-16 lg:mt-0 xs:!text-[20px] sm:!text-[20px] md:!text-[32px] md:!leading-[51px] sm:!leading-[25px] xs:!leading-[25px]">
                    Play all day long with slots at the
                    <span className="text-[#50A1FF]"> forefront of our industry</span> leading gaming platform
                  </Title>
                </div>
                <div className={classes.description}>
                  <Text color={'white'} className="text-base font-[400] xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[50px] sm:!leading-[25px] xs:!leading-[25px]" maw={600}>
                    To see what kind of winnings are in store for you on the games, Pasa invites all our online and
                    mobile players to launch into playing this slot sensation the moment{' '}
                    <span className="font-[700]"> you've logged into your unique real money </span>
                    account. You never know, one spin is all it takes to potentially change your life forever!
                  </Text>
                </div>
                <div className={classes.button2}>
                  <Button
                    component={NextLink}
                    href="games/#gameSlots"
                    size={matches ? 'md' : 'lg'}
                    bg="linear-gradient(to bottom, #2072D2, #A74C9A)"
                    className="font-[500] uppercase button"
                    radius={50}
                    styles={{
                      root: {
                        // borderColor: '#F6CAA7',
                        border: 'none',
                        width: matches ? '250px' : '325px',
                        fontSize: matches ? '15px' : '20px',
                        fontStyle: 'normal',
                        color: '#FFFFFF',
                        padding: matches ? '10px 25px' : '17px 53px',
                        gap: '10px',
                        '&:hover': {
                          background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                        },
                      },
                    }}
                  >
                    More on Slot Games
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        )}
        {matches && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '70px',
              textAlign: 'center',
              marginRight: '5px',
              marginLeft: '5px',
            }}
          >
            {' '}
            <Title
              color={'white'}
              className="font-[700] uppercase xs:!text-[20px] sm:!text-[20px] md:!text-[32px] md:!leading-[51px] sm:!leading-[25px] xs:!leading-[25px]"
              style={{
                letterSpacing: '-1.5%',
              }}
              maw={900}
            >
              Play all day long with slots at the
              <span className="text-[#50A1FF]"> forefront of our industry</span> leading gaming platform
            </Title>
            <Text
              mt={40}
              color={'white'}
              className="text-base font-[400] xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[50px] sm:!leading-[25px] xs:!leading-[25px]"
              style={{
                letterSpacing: '-1.5%',
              }}
            >
              To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile
              players to launch into playing this slot sensation the moment{' '}
              <span className="font-[700]"> you've logged into your unique real money </span>
              account. You never know, one spin is all it takes to potentially change your life forever!
            </Text>
            <Button
              mt={50}
              component={NextLink}
              href="games/#gameSlots"
              size={matches ? 'md' : 'lg'}
              bg="linear-gradient(to bottom, #2072D2, #A74C9A)"
              className="font-[500] uppercase button"
              radius={50}
              mb={100}
              styles={{
                root: {
                  // borderColor: '#F6CAA7',
                  border: 'none',
                  width: matches ? '250px' : '325px',
                  fontSize: matches ? '15px' : '20px',
                  fontStyle: 'normal',
                  color: '#FFFFFF',
                  padding: matches ? '10px 25px' : '17px 53px',
                  gap: '10px',
                  '&:hover': {
                    background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                  },
                },
              }}
            >
              More on Slot Games
            </Button>
            <Image src={'/images/pages/home/playdicewin.png'} alt="hightidealt" width="100%" />
          </div>
        )}
      </div>
    </>
  );
}
