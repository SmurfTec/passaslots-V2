import { BackgroundImage, Container, createStyles, Button, Group, Image, Flex } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';
import { Embla } from '@mantine/carousel';
import { useCallback, useEffect, useState } from 'react';

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
];
export const HomeTopCarousel = () => {
  // const { classes } = useStyles();
  const [slideProgress, setSlideProgress] = useState(1);
  const [embla, setEmbla] = useState<Embla | null>(null);

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
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
    }}>
      {/* <div className={classes.backdrop}> */}
        <Container fluid py={100} style={{ backgroundSize: 'cover', width: '100%' }}>
            <Carousel
            // styles={{
            //   indicator: {
            //     backgroundImage: 'url("images/scroll/carouselIndicatiorSelect.png")'
            //   }
            // }}
            align='center' /*withIndicators*/ className='flex justify-center align-middle items-center' getEmblaApi={setEmbla} slideSize="50%" loop initialSlide={3} images={images} delay={4000} />
            <Flex gap={5} justify='center' align='center' className='mt-5'>
              <Image height={12} width={12}
              src={slideProgress === 1 ? "/images/scroll/carouselIndicatorSelect.png" : "/images/scroll/carouselIndicatorNotSelect.png"}/>
              <Image height={12} width={12}
              src={slideProgress === 2 ? "/images/scroll/carouselIndicatorSelect.png" : "/images/scroll/carouselIndicatorNotSelect.png"}/>
              <Image height={12} width={12}
              src={slideProgress === 0 ? "/images/scroll/carouselIndicatorSelect.png" : "/images/scroll/carouselIndicatorNotSelect.png"}/>
            </Flex>
            <div className="text-center">
              <Button
                mb={0}
                mt={35}
                px={50}
                styles={{
                  root: {
                    fontSize: '20px',
                    fontStyle: 'normal',
                    color: '#FFFFFF',
                    padding: '17px 53px',
                    width: '203px',
                    gap: '10px',
                    // borderColor: '#F6CAA7',
                    '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                  },
                }}
                bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
                radius={50}
                size="lg"
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
