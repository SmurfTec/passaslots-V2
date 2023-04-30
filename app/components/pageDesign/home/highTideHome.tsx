import { BackgroundImage, Button, Container, Grid, Group, Image, Text, Title, createStyles } from '@mantine/core';
import { NextLink } from '@mantine/next';
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
    minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

export function HighTideHome() {
  const [BonusModal, bonusOpen] = useBonusModal();
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.backdrop}>
        <BackgroundImage className="" style={{ backgroundSize: 'cover' }} src="/images/pages/home/highTideImage.png">
          <Container size={1300} py={100}>
            <Grid>
              <Grid.Col xs={6}>
                <Title color="white" order={2} my={60}>
                  RIDE THE HIGH <span className="text-[#016BE6]">TIDE OF <br /> LUCK</span>
                </Title>
                <Text color="white" mt={80} className="font-[300]" size="md" mb={80}>
                To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile players 
                to launch into playing this slot sensation the moment you’ve logged into your unique real money account. 
                You never know, one spin is all it takes to potentially change your life forever!
                </Text>
                <Button 
                  component={NextLink} 
                  href="games/#gameSlots" 
                  mt={40} 
                  px={50}
                  mb={60}
                  styles={{
                    root: {
                      fontSize: '16px',
                      color: 'white',
                      borderColor: '#F6CAA7',
                      '&:hover': { background: '#016BE6' },
                    },
                  }}
                  bg={'#016BE6'}
                  size="lg"
                  radius={50} 
                  className="text-sm font-bold uppercase ">
                  More on Slot Games
                </Button>
              </Grid.Col>
            </Grid>
          </Container>
        </BackgroundImage>
      </div>
      {BonusModal}

      <div className="my-20">
        <HomeTopCarousel />
      </div>

      {/* <Container size={1300} pt={100}>
        <Image src="/images/pages/home/homeMobile2.png" alt="home mobile" />
        <div className="text-center md:text-right">
          <Button
            my={50}
            px={50}
            styles={{
              root: {
                fontSize: '16px',
                color: 'white',
                '&:hover': { background: '#751F86' },
              },
            }}
            bg={'#751F86'}
            size="lg"
            variant="outline"
            component="a"
            href="http://Pasasweeps.net"
            uppercase
          >
            Play Now
          </Button>
        </div>
      </Container> */}
      {/* <Image pt={50} src="/images/pages/home/multipleGames.png" alt="multiple games" /> */}

      <Container size={1300} pb={50}>
        <Group position="apart" className="space-y-5">
          <div className="space-y-1">
            <Title order={2} className="font-bold uppercase mt-16 lg:mt-0 leading-snug">
              Play all day long with slots at <br /> the
              <span className="text-[#751F86]"> forefront of our industry</span> <br /> leading gaming platform
            </Title>
          </div>
          <div className="md:ml-[-120px]">
            <Text className="text-base font-normal md:mt-96" maw={350}>
              To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile
              players to launch into playing this slot sensation the moment{' '}
              <span className="font-[700]"> you've logged into your unique real money </span>
              account. You never know, one spin is all it takes to potentially change your life forever!
            </Text>
          </div>
          <div>
            <Button component={NextLink} href="games/#gameSlots" mt={15} size="lg" bg="#CC51F6" className="text-sm font-bold uppercase ">
              More on Slot Games
            </Button>
          </div>
        </Group>
      </Container>
    </>
  );
}
