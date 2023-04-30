import { BackgroundImage, Container, createStyles } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('/images/pages/home/casinochipsfalling.png')`,
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
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
  return (
    <Container size={1300}>
      <BackgroundImage src="/images/carousel/carouselbg.png">
        <Carousel  slideSize="50%" loop  initialSlide={1} images={images} className={classes.backdrop} delay={4000} />
      </BackgroundImage>
    </Container>
  );
};
