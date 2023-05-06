import { Container, SimpleGrid, Title } from '@mantine/core';
import {
  GameCarousel,
  GameFooter,
  GameHero,
  GameList,
  GamePossible,
  GameSlots,
  GameRecentWinners
} from '@pasa/components';


export default function Games() {
  return (
    <>
      <GameHero />
      <GamePossible />
      <GameRecentWinners />
      <GameSlots />
      <GameCarousel />
      <GameList />
      {/* <GameFooter /> */}
    </>
  );
}
