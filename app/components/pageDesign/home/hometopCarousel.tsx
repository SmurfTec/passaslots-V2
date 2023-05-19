import { BackgroundImage, Container, createStyles, Button, Group, Image, Flex } from '@mantine/core';
// import { Carousel, useStylesCarousel } from '@pasa/customComponents';
import { Carousel } from '@mantine/carousel';
import { Embla } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

// const useStyles = createStyles((theme) => ({
//   backdrop: {
//     // backgroundColor: '#150B2E',
//     backgroundRepeat: 'no-repeat',
//     // backgroundImage: `url('/images/pages/home/casinochipsfalling.png')`,
//     // position: 'relative',
//     backgroundPosition: 'center center',
//     backgroundSize: 'cover',
//     // minHeight: '100vh',
//     position: 'relative',
//     // width: '100%',
//     // height: '100vh',
//   },
// }));

const images = [
  '/images/carousel/newcarousel1.png',
  '/images/carousel/newcarousel2.png',
  '/images/carousel/newcarousel3.png',
  '/images/carousel/newcarousel1.png',
  '/images/carousel/newcarousel2.png',
  '/images/carousel/newcarousel3.png',
];
export const HomeTopCarousel = () => {
  // const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 770px)', true);
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
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-600"
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      {/* <div className={classes.backdrop}> */}
      <Container
        fluid
        px={0}
        pt={matches ? 20 : 50}
        pb={matches ? 20 : 50}
        style={{ backgroundSize: 'cover', width: '100%' }}
      >
        <Carousel
          // styles={{
          //   indicator: {
          //     backgroundImage: 'url("images/scroll/carouselIndicatiorSelect.png")'
          //   }
          // }}

          getEmblaApi={setEmbla}
          styles={{
            indicator: {
              width: '20px',
              height: '20px',
              transition: 'width 250ms ease',
              marginTop: '50px',
              gap: '6px',
              background: 'conic-gradient(from 180deg at 50% 50%, rgba(255, 184, 0, 0.09) 0deg, #A74C9A 360deg)',
              transform: 'rotate(-45.71deg)',
              '&[data-active]': {
                background: 'conic-gradient(from 180deg at 50% 50%, #FFB800 0deg, #A74C9A 360deg)',
              },
            },
            slide: {
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            },
          }}
          withControls={false}
          align="center"
          className="flex justify-center align-middle items-center"
          slideSize="35%"
          loop
          initialSlide={3}
          slideGap={matches ? 'md' : 'xl'}
          plugins={[autoplay.current]}
          // images={images}
          // delay={4000}
        >
          {images.map((image, index) => {
            return (
              <Carousel.Slide key={index}>
                <Image className="mx-auto" maw="449px" mah="447px" src={image} />
              </Carousel.Slide>
            );
          })}
        </Carousel>

        <Flex gap={5} justify="center" align="center" className="mt-5" style={{ marginTop: matches ? '10px' : '50px' }}>
          <Image
            height={matches ? 10 : 15}
            width={matches ? 10 : 15}
            src={
              slideProgress === 0
                ? '/images/scroll/carouselIndicatorSelect.png'
                : '/images/scroll/carouselIndicatorNotSelect.png'
            }
          />
          <Image
            height={matches ? 10 : 15}
            width={matches ? 10 : 15}
            src={
              slideProgress === 1
                ? '/images/scroll/carouselIndicatorSelect.png'
                : '/images/scroll/carouselIndicatorNotSelect.png'
            }
          />
          <Image
            height={matches ? 10 : 15}
            width={matches ? 10 : 15}
            src={
              slideProgress === 2
                ? '/images/scroll/carouselIndicatorSelect.png'
                : '/images/scroll/carouselIndicatorNotSelect.png'
            }
          />
        </Flex>
        <div className="text-center">
          <Button
            mb={0}
            mt={35}
            px={50}
            styles={{
              root: {
                border: 'none',
                fontSize: matches ? '16px' : '20px',
                fontStyle: 'normal',
                color: '#FFFFFF',
                padding: matches ? '9px 25px' : '17px 53px',
                width: '203px',
                gap: '10px',
                // borderColor: '#F6CAA7',
                '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
              },
            }}
            bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
            radius={50}
            size={matches ? 'md' : 'lg'}
            variant="outline"
            component="a"
            href="http://Pasasweeps.net"
            uppercase
          >
            Play Now
          </Button>
        </div>
      </Container>
      {/* </div> */}
    </div>
  );
};
