import { BackgroundImage, Container } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';

const images = [
  '/images/carousel/topcarousel1.png',
  '/images/carousel/topcarousel2.png',
  '/images/carousel/topcarousel3.png',
  '/images/carousel/topcarousel3.png',
];
export const HomeTopCarousel = () => {
  const { classes } = useStylesCarousel();
  return (
    <Container size={1300}>
      <BackgroundImage src="/images/carousel/carouselbg.png">
        <Carousel  slideSize="33.333333%" loop  initialSlide={1} images={images} classNames={classes} delay={4000} />
      </BackgroundImage>
    </Container>
  );
};
