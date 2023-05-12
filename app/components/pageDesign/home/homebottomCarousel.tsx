import { Carousel, useStylesCarousel } from '@pasa/customComponents';
import { BackgroundImage, Container, createStyles, Button, Group, Image, Flex } from '@mantine/core';
import { Embla } from '@mantine/carousel';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const images = [
  '/images/carousel/phonecarousel4.png',
  '/images/carousel/phonecarousel1.png',
  '/images/carousel/phonecarousel3.png',
  '/images/carousel/phonecarousel5.png',
  '/images/carousel/phonecarousel2.png',
  '/images/carousel/phonecarousel4.png',
  '/images/carousel/phonecarousel1.png',
  '/images/carousel/phonecarousel3.png',
  '/images/carousel/phonecarousel5.png',
];
export const HomeBottomCarousel = () => {
  // const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 770px)', true);
  const [slideProgress, setSlideProgress] = useState(1);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [focusSlide, setFocusSlide] = useState(0);
  // const { classes } = useStylesCarousel();

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
    <Container fluid px={0} pt={20} mb={20} mt={30}>
      {!matches && (
      <Carousel
        style={{ marginTop: '100px' }}
        getEmblaApi={setEmbla}
        slideSize={"20%"}
        align='center'
        slidesToScroll={1}
        initialSlide={3}
        loop
        images={images}
        delay={4000}
        hC={493}
        wC={285}
        onSlideChange={(number) => {
          setFocusSlide(number);
        }}
        focusedIndex={focusSlide}
      />)}
      {matches && (
      <Carousel
      style={{ marginTop: '100px' }}
      getEmblaApi={setEmbla}
      slideSize={"20%"}
      align='center'
      slidesToScroll={1}
      initialSlide={1}
      loop
      images={images}
      delay={4000}
      hC={131}
      wC={76}
      onSlideChange={(number) => {
        setFocusSlide(number);
      }}
      focusedIndex={focusSlide}
      />)}
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
    </Container>
  );
};
