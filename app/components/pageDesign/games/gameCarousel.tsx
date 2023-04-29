import { Carousel } from '@mantine/carousel';
import { Container, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { SingleSlot, SingleSlotProps } from './singleSlot';
const multiFishing: SingleSlotProps[] = [
  {
    image: '/images/pages/game/multi1.png',
    text: 'Crab Avengers',
  },
  {
    image: '/images/pages/game/multi2.png',
    text: 'Thunder Dragon Deluxe: Ocean King 2',
  },
  {
    image: '/images/pages/game/multi3.png',
    text: 'Fortune Kings Plus: Ocean King 3 Plus',
  },
  {
    image: '/images/pages/game/multi4.png',
    text: 'Monster Frenzy: Ocean King 3 Plus',
  },
  {
    image: '/images/pages/game/multi5.png',
    text: 'Zombie Awaken: Ocean King 3 Plus',
  },
];

const casinoCollection: SingleSlotProps[] = [
  {
    image: '/images/pages/game/casino1.png',
    text: 'Multiplayer Roulette',
  },
  {
    image: '/images/pages/game/casino2.png',
    text: 'Hexa Keno',
  },
  {
    image: '/images/pages/game/casino3.png',
    text: 'Turbo Keno',
  },
  {
    image: '/images/pages/game/casino4.png',
    text: 'Super Ball Keno',
  },
];
export function GameCarousel() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <Container className="space-y-16" size={1300} pt={100} pb={70}>
      <Title order={4} className="font-[700] uppercase">
        MULTIPLAYER FISHING
      </Title>
      <Carousel
      align="start"
        slideSize={matches ? '75%' : '33.333333%'}
        mx="auto"
        loop
        slideGap="xl"
        styles={{
          controls: {
            top: '50%',
            transform: 'translateY(-50%) !important',
          },
          control: {
            color: '#21C3C3',
            height: '40px',
            width: '40px',
            // alignItems: 'center',
            // marginTop: '-15px',

            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
        controlsOffset={'-50px'}
      >
        {multiFishing.map((slot, key) => (
          <Carousel.Slide key={key + slot.image}>
            <SingleSlot image={slot.image} text={slot.text} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Title order={4} className="font-[700] uppercase">
        Classic casino collection
      </Title>
      <Carousel
      align="start"
        slideSize={matches ? '75%' : '33.333333%'}
        mx="auto"
        loop
        slideGap="xl"
        initialSlide={1}
        styles={{
          controls: {
            // top: 'calc(50% - 6.6rem / 2) !important',
            top: '50%',
            transform: 'translateY(-50%) !important',
          },
          control: {
            color: '#21C3C3',
            height: '40px',
            width: '40px',
            // alignItems: 'center',
            // marginTop: '-15px',

            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
      >
        {casinoCollection.map((slot, key) => (
          <Carousel.Slide key={key + slot.image}>
            <SingleSlot image={slot.image} text={slot.text} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}
