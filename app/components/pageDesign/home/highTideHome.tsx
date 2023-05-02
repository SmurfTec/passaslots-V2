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
  backdrop2: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/pages/home/playallday.png')",
    // backgroundImage: "url('/images/header/backgroundImage.png')",
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
        <BackgroundImage className="" style={{ backgroundSize: 'cover', backgroundPosition: 'center center', position: 'relative', width:'100%' }} src="/images/pages/home/highTideImage.png">
          <Container size={1300} py={100}>
            <Grid ml={-120}>
              <Grid.Col xs={6}>
                <Title color="white" order={2} mt={103}>
                  RIDE THE HIGH <span className="text-[#016BE6]">TIDE OF <br /> LUCK</span>
                </Title>
                <Text color="white" mt={61} className="font-[400] leading-10" maw={550} size="md" mb={80}>
                To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile players 
                to launch into playing this slot sensation the moment <span className="font-[700]">you’ve logged into your unique real money</span> account. 
                You never know, one spin is all it takes to potentially change your life forever!
                </Text>
                <Button 
                  component={NextLink} 
                  href="games/#gameSlots" 
                  mt={40} 
                  px={50}
                  mb={85}
                  styles={{
                    root: {
                      fontSize: '16px',
                      color: 'white',
                      // borderColor: '#F6CAA7',
                      '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                    },
                  }}
                  bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
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

      <HomeTopCarousel />

      <div className={classes.backdrop2}>
        <Container size={1300} h={120} pb={50}>
          {/* <Grid>
            <Grid.Col md={6}>
              <Image className='text-baseline left ' src="/images/pages/home/playdicewin.png" alt="home mobile" />
            </Grid.Col>
            <Grid.Col md={6}>
              
            </Grid.Col>
          </Grid> */}
          <Group position='right' className="space-y-5">
            <Grid align='baseline'>
              <Grid.Col md={12} mt={103}>
                <div className="space-y-1">
                  <Title color={'white'} order={3} className="font-bold uppercase mt-16 lg:mt-0 leading-snug">
                    Play all day long with slots at <br /> the
                    <span className="text-[#50A1FF]"> forefront of our industry</span> <br /> leading gaming platform
                  </Title>
                </div>
                <div>
                  <Text color={'white'} className="text-base font-[300] md:mt-[60px] leading-10" maw={600}>
                    To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile
                    players to launch into playing this slot sensation the moment{' '}
                    <span className="font-[700]"> you've logged into your unique real money </span>
                    account. You never know, one spin is all it takes to potentially change your life forever!
                  </Text>
                </div>
                <div className=''>
                  <Button component={NextLink} href="games/#gameSlots" mt={150} size="lg" 
                    bg="linear-gradient(to bottom, #2072D2, #A74C9A)" className="text-sm font-bold uppercase"
                    radius={50}
                    styles={{
                      root: {
                        // borderColor: '#F6CAA7',
                        color: '#FFFFFF',
                        '&:hover': {
                          background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                        },
                      },
                    }}>
                    More on Slot Games
                  </Button>
                </div>
              </Grid.Col>
            </Grid>
          </Group>
        </Container>
      </div>
    </>
  );
}
