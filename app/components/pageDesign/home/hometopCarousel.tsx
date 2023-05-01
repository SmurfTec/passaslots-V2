import { BackgroundImage, Container, createStyles, Button, Group, Image, Flex } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';
import { Embla } from '@mantine/carousel';
import { useCallback, useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    // backgroundColor: '#150B2E',
    backgroundRepeat: 'no-repeat',
    // backgroundImage: `url('/images/pages/home/casinochipsfalling.png')`,
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

const images = [
  '/images/carousel/newcarousel1.png',
  '/images/carousel/newcarousel2.png',
  '/images/carousel/newcarousel3.png',
];
export const HomeTopCarousel = () => {
  const { classes } = useStyles();
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
      backgroundImage:
        'linear-gradient(to right, #1A0E37, #016BE6, #A74C9A, #84329A)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
    }}>
      <div className={classes.backdrop}>
        <Container size={1300} py={100} style={{ backgroundSize: 'cover', width: '100%' }}>
            <Carousel getEmblaApi={setEmbla} slideSize="50%" loop initialSlide={1} images={images} delay={4000} hC={500} wC={500} />
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
                my={50}
                px={50}
                styles={{
                  root: {
                    fontSize: '16px',
                    color: 'white',
                    borderColor: '#F6CAA7',
                    '&:hover': { background: '#016BE6' },
                  },
                }}
                bg={'#016BE6'}
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
      </div>
    </div>
  );
};
