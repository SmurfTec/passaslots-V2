import { ActionIcon, Container, Grid, Image, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { SingleSlot, SingleSlotProps } from './singleSlot';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const slotData: SingleSlotProps[] = [
  {
    image: '/images/pages/game/game1.png',
    text: 'Life of Luxury',
  },
  {
    image: '/images/pages/game/game12.png',
    text: 'Life of Luxury 2',
  },
  {
    image: '/images/pages/game/colorfulorchard.png',
    text: 'Colorful Orchard',
  },
  {
    image: '/images/pages/game/safariheat.png',
    text: 'Safari Heat',
  },
  {
    image: '/images/pages/game/GlacierGold.png',
    text: 'Ultimate Fire Link - Glacier Gold',
  },
  {
    image: '/images/pages/game/777.png',
    text: '777',
  },
  {
    image: '/images/pages/game/game4.png',
    text: 'Buffalo 777',
  },
  {
    image: '/images/pages/game/game7.png',
    text: "Stinkin' Rich",
  },
  {
    image: '/images/pages/game/game10.png',
    text: 'Cash Spin',
  },
  {
    image: '/images/pages/game/diamonds.png',
    text: 'Diamonds - Lock It Link',
  },
  {
    image: '/images/pages/game/game11.png',
    text: 'Twin $pin',
  },
  {
    image: '/images/pages/game/game13.png',
    text: 'Mustang Money',
  },
  {
    image: '/images/pages/game/game17.png',
    text: 'Wolf Run',
  },
  {
    image: '/images/pages/game/gorillachief2.png',
    text: 'Gorilla Chief 2',
  },
  {
    image: '/images/pages/game/game18.png',
    text: 'Walking Dead',
  },
  {
    image: '/images/pages/game/game19.png',
    text: 'Thunder Zeus',
  },
  {
    image: '/images/pages/game/merrychristmas.png',
    text: 'Merry Christmas',
  },
  {
    image: '/images/pages/game/Thegoodlife.png',
    text: 'The Good Life',
  },
  {
    image: '/images/pages/game/Happy&Prosperous.png',
    text: 'Happy & Prosperous',
  },
  {
    image: '/images/pages/game/game16.png',
    text: '88 Fortunes',
  },
  {
    image: '/images/pages/game/Paydirt.png',
    text: 'PAY DIRT',
  },
  {
    image: '/images/pages/game/HAPPYDUCK.png',
    text: 'Happy Duck',
  },
  {
    image: '/images/pages/game/UFLCHINASTREET.png',
    text: 'Ultimate FIre Link - China Street',
  },
  {
    image: '/images/pages/game/CA$HMACHINE.png',
    text: 'CA$H MACHINE',
  },
  {
    image: '/images/pages/game/KirinlinkChinatown.png',
    text: 'KIRINKINK - CHINATOWN',
  },
  {
    image: '/images/pages/game/invaders.png',
    text: 'Planet Moolah',
  },
  {
    image: '/images/pages/game/UFLOLIVERASTREET.png',
    text: 'Ultimate FIre Link - Olivera Street',
  },
  {
    image: '/images/pages/game/GameOfThrones.png',
    text: 'Game Of Thrones',
  },
  {
    image: '/images/pages/game/Stpatricksday.png',
    text: 'St. Patricks Day',
  },
  {
    image: '/images/pages/game/UFLriverwalk.png',
    text: 'Ultimate FIre Link - River Walk',
  },
  {
    image: '/images/pages/game/crazy7.png',
    text: 'Crazy 7',
  },
  {
    image: '/images/pages/game/godofforturn.png',
    text: 'God Of Fortune',
  },
  {
    image: '/images/pages/game/legendofzroro.png',
    text: 'The Legend Of Zorro',
  },
  {
    image: '/images/pages/game/wheeloffortune.png',
    text: 'Wheel Of Fortune',
  },
  {
    image: '/images/pages/game/pandafortune.png',
    text: 'Panda Fortune',
  },
];

export function GameSlots() {
  const matches = useMediaQuery('(max-width: 810px)');
  const matches2 = useMediaQuery('(max-width: 370px)');
  const [showGames, setShowGames] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div
      style={{
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',

        // borderBottomLeftRadius: '240px',
        // borderBottomRightRadius: '240px',
        zIndex: 150,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={matches ? 50 : 70}>
        <Title
          id="gameSlots"
          mb={50}
          className="font-[700] uppercase md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px] tracking-[-0.015em] xs:!text-[24px] sm:!text-[32px] md:!text-[48px]"
        >
          SLOTS
        </Title>
        <Carousel
          mb={!matches ? 50 : 0}
          slideSize="25%"
          mx="auto"
          height="auto"
          withControls
          slideGap="md"
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          align="start"
          breakpoints={[
            { maxWidth: 'md', slideSize: '25%' },
            { maxWidth: 'sm', slideSize: '50%', slideGap: 0 },
          ]}
          styles={{
            slide: {
              marginRight: '15px',
            },
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
              },
            },
          }}
          nextControlIcon={<ChevronRight size={26} />}
          previousControlIcon={<ChevronLeft size={26} />}
          controlsOffset={'-250px'}
        >
          {slotData.map((slot, key) => (
            <Carousel.Slide key={key + slot.text}>
              <SingleSlot image={slot.image} text={slot.text} hc={matches ? 180 : 243} wc={matches ? 225 : 288} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
