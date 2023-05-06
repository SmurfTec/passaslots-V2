import { Button, Container, Image, Text, Title, Grid, BackgroundImage, SimpleGrid } from '@mantine/core';
import { CardData, WinnerCard } from '@pasa/components/card';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';
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

export function GameRecentWinners() {
  const { classes } = useStylesCarousel();
  return (<>
    <Container fluid pl={90} pr={69} mt={100}>
      <Title color='white' className='uppercase text-[48px] font-[700] leading-[56px] tracking-[-0.015em]' mb={50}>
        RECENT WINNERS
      </Title>
      <SimpleGrid
        // cols={2}
        // spacing={20}
        // breakpoints={[
        //   { maxWidth: '72rem', cols: 2, spacing: 'sm' },
        //   { maxWidth: '70rem', cols: 1, spacing: 'sm' },
        // ]}
      >
        <WinnerCard title="Recent Winners" data={recentWinners} />
        {/* <WinnerCard title="Top Winners" data={topWinners} /> */}
      </SimpleGrid>
    </Container>
  </>
  );
}
