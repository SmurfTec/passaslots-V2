import { ActionIcon, Container, Grid, Image, Text, Title } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { SingleSlot, SingleSlotProps } from './singleSlot';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const slotData: SingleSlotProps[] = [
  {
    image: '/images/pages/game/game1.png',
    text: 'Life of Luxury',
  },
  {
    image: '/images/pages/game/game2.png',
    text: 'Crab Avengers ',
  },
  {
    image: '/images/pages/game/game3.png',
    text: 'Multiplayer Roulette',
  },
  {
    image: '/images/pages/game/game4.png',
    text: 'Buffalo 777',
  },
  {
    image: '/images/pages/game/game5.png',
    text: 'Thunder Dragon Deluxe',
  },
  {
    image: '/images/pages/game/game6.png',
    text: 'HEXA KENO',
  },
  {
    image: '/images/pages/game/game7.png',
    text: "Stinkin' Rich",
  },
  {
    image: '/images/pages/game/game8.png',
    text: 'Monster Frenzy',
  },
  {
    image: '/images/pages/game/game9.png',
    text: 'Super Ball KENO',
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
    image: '/images/pages/game/game12.png',
    text: 'Life of Luxury 2',
  },
  {
    image: '/images/pages/game/game13.png',
    text: 'Mustang Money',
  },
  {
    image: '/images/pages/game/game14.png',
    text: 'Fortune Kings Plus',
  },
  {
    image: '/images/pages/game/game15.png',
    text: 'TURBO KENO',
  },
  {
    image: '/images/pages/game/game16.png',
    text: '88 Fortunes',
  },
];

export function GameSlots() {
  const matches = useMediaQuery('(max-width: 810px)');
  const matches2 = useMediaQuery('(max-width: 370px)');
  const [showGames, setShowGames] = useState(false);
  return (
    <div
      style={{
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        borderBottom: '7px solid #016BE6',
        // borderBottomLeftRadius: '240px',
        // borderBottomRightRadius: '240px',
        zIndex: 150,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid pl={matches? 5 : 90} pr={matches? 5 : 69} pt={100} pb={0}>
        <Title id="gameSlots" my={50} className="font-[700] uppercase leading-[56px] tracking-[-0.015em] text-[48px]">
          SLOTS
        </Title>
        <div className="flex flex-row justify-between">
          {!matches2 && showGames && (
            <div className="basis-[0.5%] my-auto mr-20">
              <ActionIcon
                onClick={() => setShowGames(!showGames)}
                bg="#FFB800"
                size={58}
                radius={50}
                className="drop_shadow_[0px_4px_32px_rgba(0, 0, 0, 0.11)] hover:bg-[#FFB800]"
              >
                <ChevronLeft color="#FFFFFF" />
              </ActionIcon>
            </div>
          )}
          <div className="basis-[99.5%]">
            <Grid m={0} grow gutterSm={40}>
              {slotData.slice(matches2 ? 0 : showGames ? 8 : 0, matches2 ? 16 : showGames ? 16 : 8).map((slot, key) => (
                <Grid.Col key={key + slot.text} sm={3}>
                  <SingleSlot image={slot.image} text={slot.text} />
                </Grid.Col>
              ))}
            </Grid>
          </div>
          {!matches2 && !showGames && (
            <div className="basis-[0.5%] my-auto">
              <ActionIcon
                onClick={() => setShowGames(!showGames)}
                bg="#FFB800"
                size={58}
                radius={50}
                className="drop_shadow_[0px_4px_32px_rgba(0, 0, 0, 0.11)] hover:bg-[#FFB800]"
              >
                <ChevronRight color="#FFFFFF" />
              </ActionIcon>
            </div>
          )}
        </div>
        <Grid m={0} pb={0} pt={200} align="center" justify="center">
          <Grid.Col style={{ textAlign: '-webkit-center' }} className="relative" xs={12} sm={12}>
            {/* <div className="absolute top-1/2 -translate-y-1/2 pr-32"> */}
            <Title
              color="#FFFFFF"
              maw={850}
              className="text-[700] text-[48px] leading-[63px] tracking-[0.0125em] text-center uppercase"
            >
              Experience a world of variety,{' '}
              {/* <br /> */}
              right at your fingertips!
            </Title>
            <Text
              mt={30}
              maw={850}
              color="#FFFFFF"
              className="font-[400] text-[20px] text-center leading-[43px] tracking-[0.005em]"
            >
              With an ever-growing selection of popular games like Fire Kirin Plus, Dragon Slayer, and{' '}
              {/* <br /> */}
              Ocean King 5, you'll never get bored. And the best part? We add new games every{' '}
              {/* <br /> */}
              month, ensuring that you always have access to the latest and greatest in gaming.{' '}
            </Text>
            {/* </div> */}
          </Grid.Col>
          <Grid pb={0} align="center">
            <Image
              // mb={'0px !important'}
              mx="auto !important"
              className="mx-auto lg:mb[-85px] md:mb-[-65px] sm:mb-[-35px] xs:mb-[-25px]"
              src="/images/pages/game/gameCouch.png"
              alt="gaming creator"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
