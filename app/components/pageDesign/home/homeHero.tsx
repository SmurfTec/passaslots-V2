import {
  BackgroundImage,
  Button,
  Grid,
  Group,
  Image,
  Text,
  Title,
  createStyles,
  Modal,
  Popover,
  Center,
  Container,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
// import { Carousel, ScrollButton } from '@pasa/customComponents';
import { useBonusModal } from '@pasa/hooks';
import { useState } from 'react';
import { ArrowRight, Dots } from 'tabler-icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

// const useStyles = createStyles((theme) => ({
//   backdrop: {
//     // backgroundColor: '#150B2E',
//     backgroundImage: "url('/images/header/backgroundImage.png')",
//     backgroundRepeat: 'no-repeat',
//     // position: 'relative',
//     backgroundPosition: 'center center',
//     // backgroundSize: 'cover',
//     height: '693px',
//     width: '100%',
//     position: 'relative',
//     // width: '100%',
//     // height: '100vh',
//   },
// }));

const images = [
  '/images/pages/home/HomeFirstImage.png',
  '/images/pages/home/HomeFirstImage.png',
  '/images/pages/home/HomeFirstImage.png',
];

export function HomeHero() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  // const { classes } = useStyles();
  const [BonusModal, bonusOpen] = useBonusModal();
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const closesideMenu = () => {
    if (sideButtons) {
      setSideButtons(false);
    }
  };

  return (
    <div
      onClick={closesideMenu}
      className="relative"
      style={{
        // width: '100%',
        // height: '100vh',
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(50px)',
        // position: 'relative',
        marginTop: '-115px',
      }}
    >
      {/* <BackgroundImage src='/images/header/backgroundImage.png' h={693} w={"100%"} pos="relative" 
      style={{
        backgroundPosition: 'center center',
        marginTop: '-115px',
      }}> */}
      {/* <Container fluid> */}
      <Image
        className="absolute center top-1 opacity-80"
        width={'100%'}
        height={693}
        src="/images/header/backgroundImage.png"
        alt="image"
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '120px',
        }}
      >
        <Center w={'90%'}>
          <Grid align='center' justify='center'>
            <Grid.Col>
              <Carousel
                w="100%"
                styles={{
                  indicator: {
                    width: !matches ? '22px' : '10px',
                    height: !matches ? '22px' : '10px',
                    transition: 'width 250ms ease',
                    backgroundColor: '#D9D9D9',
                    gap: !matches ? '21px' : '10px',

                    '&[data-active]': {
                      width: '22px',
                      backgroundColor: '#016BE6',
                    },
                  },
                }}
                withControls={false}
                withIndicators
                align="center"
                loop
                plugins={[autoplay.current]}
                // images={images}
                // delay={5000}
              >
                {images.map((image, index) => {
                  return (
                    <Carousel.Slide key={index}>
                      <Image className="mx-auto" maw="598px" mah="596px" src={image} />
                    </Carousel.Slide>
                  );
                })}
              </Carousel>
            </Grid.Col>
            <Grid.Col>
              <Title
                align="center"
                color={'#FFB800'}
                mt={matches ? 10 : 30}
                className="font-[900] text-center uppercase md:!text-[96px] sm:!text-[40px] xs:!text-[40px] md:!leading-[112px] sm:!leading-[56px] xs:!leading-[56px]"
                style={{ letterSpacing: '-1.5%' }}
              >
                Pasa SLOTS
              </Title>
            </Grid.Col>
            <Grid.Col>
              <Title
                align="center"
                color={'#ffffff'}
                mt={13}
                className="font-[700] text-center uppercase md:!text-[32px] sm:!text-[20px] xs:!text-[20px] md:!leading-[51px] sm:!leading-[30px] xs:!leading-[30px]"
                // size={matches ? 'sm' : 'md'}
                // order={2}
              >
                Seize Your $13 Sign up Fortune by the Seashore
              </Title>
            </Grid.Col>
            <Grid.Col className='text-center'>
              <Button
                mt={matches ? 25 : 58}
                radius={50}
                mb={matches ? 50 : 100}
                className="font-[500] mx-auto"
                styles={{
                  root: {
                    border: 'none',
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    padding: matches ? '12px 35px' : '17px 53px',
                    // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                    '&:hover': {
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    },
                    fontSize: matches ? '15px' : '17px',
                    height: matches ? '40px' : '57px',
                    width: matches ? '180px' : '203px',
                  },
                  label: {
                    marginBottom: '-2px',
                  },
                }}
                // size="xl"
                component="a"
                href="http://Pasasweeps.net"
              >
                PLAY NOW
              </Button>
            </Grid.Col>
          </Grid>
        </Center>

        {!matches ? (
          <Group align={'center'} className="">
            {/* <Grid.Col> */}
            <Popover
              opened={sideButtons}
              onClose={close}
              position="right"
              styles={{
                dropdown: {
                  background: 'transparent',
                  border: '0px',
                },
              }}
            >
              <Popover.Target>
                <Button
                  className="absolute top-1/2 left-0"
                  onClick={() => setSideButtons(!sideButtons)}
                  h={70}
                  w={70}
                  bg={
                    sideButtons
                      ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)'
                      : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)'
                  }
                  styles={{
                    root: {
                      border: 'none',
                      borderRadius: '0px 5px 5px 0px',
                      '&:hover': {
                        background: sideButtons
                          ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)'
                          : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)',
                      },
                    },
                  }}
                >
                  <Dots size={34} />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Group align="center">
                  <Button
                    bg={'#0076FF'}
                    className="hover:bg-[#0076FF]"
                    radius={27}
                    mb={150}
                    ml={-20}
                    component={NextLink}
                    href="/about"
                    size="sm"
                    style={{ fontWeight: '700', fontSize: '15px' }}
                  >
                    About Us
                  </Button>
                  <Button
                    className="text-top items-center hover:bg-[#0076FF]"
                    bg={'#0076FF'}
                    mt={-20}
                    radius={35}
                    ml={-90}
                    component={NextLink}
                    href="/contact"
                    size="sm"
                    style={{ fontWeight: '700', fontSize: '15px' }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    bg={'#0076FF'}
                    className="hover:bg-[#0076FF]"
                    radius={36}
                    mt={120}
                    ml={-140}
                    component={NextLink}
                    href="/how-it-works"
                    size="sm"
                    style={{ fontWeight: '700', fontSize: '15px' }}
                  >
                    How it works?
                  </Button>
                </Group>
              </Popover.Dropdown>
            </Popover>
            {/* </Grid.Col> */}
          </Group>
        ) : undefined}
        {BonusModal}
      </div>

      {/* </Container> */}
      {/* </BackgroundImage> */}
    </div>
  );
}
