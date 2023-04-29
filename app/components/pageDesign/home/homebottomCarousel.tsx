import { Container } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';
const images = [
  '/images/pages/home/carousel.png',
  '/images/pages/home/carousel.png',
  '/images/pages/home/carousel.png',
];
export const HomeBottomCarousel = () => {
  const { classes } = useStylesCarousel();
  return (
    <Container size={1300}>
      <Carousel images={images} loop classNames={classes} delay={4000} />
    </Container>
  );
};
