import { BackgroundImage, Button, Grid, Group, Image, Text, Title, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { ScrollButton } from '@pasa/customComponents';
import { useBonusModal } from '@pasa/hooks';
import { ArrowRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    // backgroundColor: '#150B2E',
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

export function HomeHero() {
  const matches = useMediaQuery('(max-width: 1000px)');
  const { classes } = useStyles();
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div 
    className="bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      backgroundImage:
        'linear-gradient(to right, #1A0E37, #016BE6, #A74C9A, #84329A)',
      backdropFilter: 'blur(20px)',
    }}>
      <div className={classes.backdrop} style={{ marginTop: '-115px' }}>
        <Grid m={0} align="center">
          {!matches ? (
            <Grid.Col md={1}>
              <Group className="ml-6 space-y-4" style={{ writingMode: 'vertical-rl', rotate: '180deg' }}>
                <Text component={NextLink} href="/how-it-works" size="sm">
                  How does it work?
                </Text>
                <Text component={NextLink} href="/about" size="sm">
                  About Us
                </Text>
                <Text component={NextLink} href="/contact" size="sm">
                  Contact Us
                </Text>
              </Group>
            </Grid.Col>
          ) : undefined}
          <Grid.Col order={2} orderMd={2} m={0} md={11} className='relative text-center mt-60'>
            <Image className='mx-auto' width={500} height={500} src="/images/pages/home/HomeFirstImage.png" alt='image' />
            <Title color={'#FFB800'} mt={10} className="font-[700] uppercase" order={1}>
              Pasa SLOTS
            </Title>
            <Title color={'#ffffff'} mt={30} className="font-[400] uppercase" size={'md'} order={2}>
              Seize Your $10 Sign up Fortune by the Seashore
            </Title>
            <Button
              mt={40}
              radius={50}
              w={180}
              mb={40}
              styles={{
                root: {
                  background: '#016BE7',
                  borderColor: '#F6CAA7',
                  '&:hover': {
                    background: '#016BE7',
                  },
                  fontSize: '17px',
                },
                leftIcon: {
                  padding: '0 10px',
                },
                label: {
                  marginBottom: '-2px',
                },
              }}
              size="xl"
              onClick={bonusOpen}
            >
              Play Now
            </Button>

            <Image className='absolute right-0 top-1/2 -translate-y-1/2' width={250} height={250} src="/images/pages/home/homeHeroBackground.png" alt='image' />

          </Grid.Col>
          {BonusModal}
          {/* <Grid.Col order={1} orderMd={3} p={0} md={6} className="min-h-screen">
            <BackgroundImage className="min-h-screen lg:min-h-[120vh] relative" src="/images/pages/home/heroImage.png">
              <BackgroundImage
                className="space-y-4 align-bottom absolute left-1/2 p-10 -translate-x-1/2 bottom-0 sm:bottom-10 sm:w-[80%] w-full"
                src="/images/pages/home/HeroImageSubBackground.png"
              >
                <Text color="white" size="md">
                  The new home to your online gamroom needs at Pasa Slots!
                </Text>
                <Title order={2} color="white">
                  ONLINE 24/7
                </Title>
                <Title style={{ marginTop: '-1px' }} className="font-[700]" order={3} color="white">
                  PLATFORM
                </Title>
                <Text my={20} color="white" className="tracking-[0.005em]" opacity={0.8} size="sm">
                  Let us take you on a journey where you can travel and explore our platform with more than just your own
                  money. Take advantage of our daily match bonuses and enjoy a wide range of gaming options.
                </Text>
                <Group position="apart">
                  <Button
                    bg="white"
                    styles={{
                      root: {
                        color: '#8D8664',
                        '&:hover': {
                          backgroundColor: 'white',
                        },
                      },
                    }}
                    radius={20}
                    className="font-[600] sm:w-1/2"
                    uppercase
                    onClick={bonusOpen}
                  >
                    EARN FREE Credits now
                  </Button>
                  <Image mt={10} width="60%" height={30} src="/images/pages/home/heroCompany.png" alt="company" />
                </Group>

                
              </BackgroundImage>
            </BackgroundImage>
          </Grid.Col> */}
        </Grid>
        {/* <ScrollButton pointerPosition="DOWN" className="absolute bottom-0 left-[44%]" /> */}
      </div>
    </div>
  );
}
