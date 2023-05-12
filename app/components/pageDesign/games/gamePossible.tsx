import { Button, Container, Image, Text, Title, Grid, BackgroundImage, Flex } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';
import { Embla, Carousel as MantineCarousel } from '@mantine/carousel';
import { useCallback, useEffect, useState, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  '/images/pages/game/carousel1.png',
  '/images/pages/game/carousel2.png',
  '/images/pages/game/carousel3.png',
  '/images/pages/game/carousel4.png',
  '/images/pages/game/carousel5.png',
  '/images/pages/game/carousel6.png',
];

export function GamePossible() {
  const { classes } = useStylesCarousel();
  const [slideProgress, setSlideProgress] = useState(1);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.min(2, Math.floor(Math.max(0, embla.scrollProgress() * 3)));
    setSlideProgress(progress);
    // console.log(progress);
  }, [embla, setSlideProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);
  return (
    <>
      <div
        style={{
          backgroundImage:
            'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
          backdropFilter: 'blur(20px)',
          backgroundSize: 'cover',
          zIndex: 150,
          boxShadow: '-1px 0px 20px 3px #016BE6',
          borderTop: '6px solid #016BE6',
        }}
      >
        <BackgroundImage
          style={{
            backgroundPosition: 'center center',
            backgroundSize: '100% 80%',
            backgroundRepeat: 'no-repeat',
          }}
          className=""
          src="/images/pages/game/ellipses.png"
          bgsz="auto"
        >
          <Container fluid pl={90} pr={69} py={100}>
            <Grid align="center" justify="center">
              <div className="text-center">
                <Image
                  maw={644} mah={363}
                  className="mx-auto"
                  src="/images/pages/game/gamePossible.png"
                  alt="game"
                  my={100}
                />
              </div>
              <div className="text-center">
                <Title
                  color="white"
                  className="uppercase xs:!text-[44px] text-[48px] font-[700] leading-[56px] tracking-[-0.015em] text-center"
                >
                  A Sea of Possibilities Awaits
                </Title>
                <Text maw={705} my={20} color="white" className="xs:!text-[22px] text-[24px] font-[400] leading-[28px] text-center">
                  Just like the ocean's currents, our app's games are always in{' '}
                  {/* <br /> */}
                  motion and constantly changing, offering you an endless sea of{' '}
                  {/* <br /> */}
                  choices to explore!
                </Text>
              </div>
            </Grid>
          </Container>
        </BackgroundImage>
      </div>
      <div
        style={{
          backgroundImage:
            'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
          backdropFilter: 'blur(20px)',
          backgroundSize: 'cover',
          zIndex: 150,
          boxShadow: '-1px 0px 20px 3px #016BE6',
          borderTop: '6px solid #016BE6',
        }}
      >
        <Container fluid py={100} px={0}>
          <Title
            color="white"
            className="uppercase text-[48px] font-[700] leading-[51px] tracking-[0.0125em] text-center"
          >
            FEATURED SECTION OF GAMES
          </Title>
          <Grid align="center" justify="center" py={80} px={0}>
            <Grid.Col px={0} sm={12}>
              <MantineCarousel
                // withIndicators
                getEmblaApi={setEmbla}
                align="center"
                // images={images}
                slideSize="50%"
                withControls={false}
                loop
                classNames={classes}
                // delay={4000}
                styles={{
                  indicator: {
                    width: '10.87px',
                    height: '10.87px',
                    transition: 'width 250ms ease',
                    marginTop: '40px',
                    gap: '6px',
                    background: 'conic-gradient(from 180deg at 50% 50%, rgba(255, 184, 0, 0.09) 0deg, #A74C9A 360deg)',
                    transform: 'rotate(-45.71deg)',
                    '&[data-active]': {
                      background: 'conic-gradient(from 180deg at 50% 50%, #FFB800 0deg, #A74C9A 360deg)',
                    },
                  },
                }}
              >
                {images.map((image, index) => {
                  return(
                  <MantineCarousel.Slide key={index}>
                    <Image className='mx-auto' maw="890px" mah="445px" src={image} />
                  </MantineCarousel.Slide>
                  )
                })}
              </MantineCarousel>
              <Flex gap={5} justify="center" align="center" className="mt-5" style={{ marginTop: '50px' }}>
                <Image
                  height={15}
                  width={15}
                  src={
                    slideProgress === 0
                      ? '/images/scroll/carouselIndicatorSelect.png'
                      : '/images/scroll/carouselIndicatorNotSelect.png'
                  }
                />
                <Image
                  height={15}
                  width={15}
                  src={
                    slideProgress === 1
                      ? '/images/scroll/carouselIndicatorSelect.png'
                      : '/images/scroll/carouselIndicatorNotSelect.png'
                  }
                />
                <Image
                  height={15}
                  width={15}
                  src={
                    slideProgress === 2
                      ? '/images/scroll/carouselIndicatorSelect.png'
                      : '/images/scroll/carouselIndicatorNotSelect.png'
                  }
                />
              </Flex>
            </Grid.Col>
          </Grid>
          <Grid align="center" justify="center">
            <div className="relative text-center">
              <Button
                styles={{
                  root: {
                    border: 'none',
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    padding: '17px 53px',
                    letterSpacing: '-0.015em',
                    // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                    '&:hover': {
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    },
                    fontSize: '20px',
                    lineHeight: '23px',
                    textTransform: 'uppercase',
                    height: '57px',
                    width: '203px',
                  },
                  label: {
                    marginBottom: '-2px',
                    fontSize: '20px',
                    lineHeight: '23px',
                  },
                }}
                radius={50}
                className="font-[500]"
                component="a"
                href="http://Pasasweeps.net"
              >
                Play Now
              </Button>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
}
