import { Carousel as MantineCarousel, CarouselProps as MantineCarouselProps } from '@mantine/carousel';
import { Image, createStyles } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { ReactNode, useRef } from 'react';
type CarouselProps = MantineCarouselProps & {
  delay?: number;
  slides?: ReactNode[];
  images?: string[];
  hC?: number;
  wC?: number;
};

export const Carousel = ({ delay, images, hC, wC, slides, ...rest }: CarouselProps) => {
  const autoplay = useRef(Autoplay({ delay: delay ?? 3000 }));
  return (
    <MantineCarousel
      // withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      
      {...rest}
    >
      {slides && slides.map((slide,index) => <MantineCarousel.Slide key={index}>{slide}</MantineCarousel.Slide>)}
      {images && images.map((image,index) => (
        <MantineCarousel.Slide key={index} gap={50}>
          <Image height={hC} width={wC} src={image} alt="slide" />
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
};

Carousel.defaultProps = {
  withControls: false,
};

export const useStylesCarousel = createStyles((theme) => ({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: '10px',
    transition: 'width 250ms ease',
    background: '#D9D9D9',
    '&[data-active]': {
      width: 10,
      background: 'black',
    },
  },
  indicators: {
    position: 'absolute',
    bottom: '0px',
    top: '0px',
    left: '-25px',
    [theme.fn.smallerThan(810)]: {
      left: '-13px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
