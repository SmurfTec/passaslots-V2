import { Container, SimpleGrid, Title } from '@mantine/core';
import {
  CardData,
  GameCarousel,
  GameFooter,
  GameHero,
  GameList,
  GamePossible,
  GameSlots,
  WinnerCard,
} from '@pasa/components';
import { recentWinners, topWinners } from '@pasa/public';
export async function getStaticProps() {
  return {
    props: {
      recentWinners,
      topWinners,
    },
  };
}
type pageProps = {
  recentWinners: CardData;
  topWinners: CardData;
};

export default function Games({ recentWinners, topWinners }: pageProps) {
  return (
    <div style={{ marginTop: '120px' }}>
      <GameHero />
      <GamePossible />
      <Container size={1300} mt={100}>
        <Title className='font-bold' mb={50} order={3}>RECENT WINNERS</Title>
        <SimpleGrid
          cols={2}
          spacing={20}
          breakpoints={[
            { maxWidth: '72rem', cols: 2, spacing: 'sm' },
            { maxWidth: '70rem', cols: 1, spacing: 'sm' },
          ]}
        >
          <WinnerCard title="Recent Winners" data={recentWinners} />
          <WinnerCard title="Top Winners" data={topWinners} />
        </SimpleGrid>
      </Container>
      <GameSlots />
      <GameCarousel />
      <GameList />
      <GameFooter />
    </div>
  );
}
