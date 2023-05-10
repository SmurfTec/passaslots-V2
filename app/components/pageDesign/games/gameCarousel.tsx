import { Carousel } from '@mantine/carousel';
import { Container, Grid, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import { SingleSlot, SingleSlotProps } from './singleSlot';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { useRef } from 'react';
const multiFishing: SingleSlotProps[] = [
  {
    image: '/images/pages/game/game2.png',
    text: 'Crab Avengers',
  },
  {
    image: '/images/pages/game/game1.png',
    text: 'Life of Luxury',
  },
  {
    image: '/images/pages/game/game3.png',
    text: 'Multiplayer Roulette',
  },
  {
    image: '/images/pages/game/game4.png',
    text: 'BUFFALO 777',
  },
  {
    image: '/images/pages/game/game5.png',
    text: 'Thunder Dragon Deluxe',
  },
];

const casinoCollection: SingleSlotProps[] = [
  {
    image: '/images/pages/game/game8.png',
    text: 'Monster Frenzy',
  },
  {
    image: '/images/pages/game/game9.png',
    text: 'Super Ball Keno',
  },
  {
    image: '/images/pages/game/game10.png',
    text: 'Cash Spin',
  },
  {
    image: '/images/pages/game/game11.png',
    text: 'Twin Spin',
  },
  {
    image: '/images/pages/game/game15.png',
    text: 'Turbo Keno',
  },
];
export function GameCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const autoplay2 = useRef(Autoplay({ delay: 2000 }));
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <div style={{
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
    }}>
      <Container className="space-y-16" fluid pl={matches? 5 : 90} pr={matches? 5 : 69} py={100}>
        <Title className="font-[700] text-[48px] leading-[56px] tracking-[-0.015em] uppercase mb-[79px]">
          MULTIPLAYER FISHING
        </Title>
        <Carousel
          slideSize='25%'
          mx='auto'
          height='auto'
          withControls
          slideGap='md'
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          align='start'
          breakpoints={[
            { maxWidth: 'md', slideSize: '25%' },
            { maxWidth: 'sm', slideSize: '50%', slideGap: 0 },
          ]}
          styles={{
            controls: {
              // top: '50%',
              transform: 'translateY(-50%) !important',
            },
            control: {
              color: '#FFFFFF',
              background: '#FFB800',
              height: '58px',
              width: '58px',
              border: '0px',
              // alignItems: 'center',
              // marginTop: '-15px',

              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
              ':hover': {
                background: '#FFB800',
                color: '#FFFFFF',
              }
            },
          }}
          nextControlIcon={<ChevronRight size={26} />}
          previousControlIcon={<ChevronLeft size={26} />}
          controlsOffset={'-250px'}
        >
          {multiFishing.map((slot, key) => (
            <Carousel.Slide key={key + slot.text}>
              <SingleSlot image={slot.image} text={slot.text} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Title className="font-[700] text-[48px] leading-[56px] tracking-[-0.015em] uppercase my-[79px]">
          Classic casino collection
        </Title>
        <Carousel
          slideSize='25%'
          mx='auto'
          height='auto'
          withControls
          slideGap='md'
          loop
          plugins={[autoplay2.current]}
          onMouseEnter={autoplay2.current.stop}
          onMouseLeave={autoplay2.current.reset}
          align='start'
          breakpoints={[
            { maxWidth: 'md', slideSize: '25%' },
            { maxWidth: 'sm', slideSize: '50%', slideGap: 0 },
          ]}
          styles={{
            controls: {
              // top: '50%',
              transform: 'translateY(-50%) !important',
            },
            control: {
              color: '#FFFFFF',
              background: '#FFB800',
              height: '58px',
              width: '58px',
              border: '0px',
              // alignItems: 'center',
              // marginTop: '-15px',

              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
              ':hover': {
                background: '#FFB800',
                color: '#FFFFFF',
              }
            },
          }}
          nextControlIcon={<ChevronRight size={26} />}
          previousControlIcon={<ChevronLeft size={26} />}
          controlsOffset={'-250px'}
        >
          {casinoCollection.map((slot, key) => (
            <Carousel.Slide key={key + slot.image}>
              <SingleSlot image={slot.image} text={slot.text} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
