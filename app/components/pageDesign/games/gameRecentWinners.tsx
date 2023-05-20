import { Button, Container, Image, Text, Title, Grid, BackgroundImage, SimpleGrid } from '@mantine/core';
import { CardData, WinnerCard } from '@pasa/components/card';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';
import { recentWinners, topWinners } from '@pasa/public';
import { useMediaQuery } from '@mantine/hooks';
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
  const matches = useMediaQuery('(max-width: 810px)');
  const { classes } = useStylesCarousel();
  return (
    <>
      <Container
        fluid
        pl={matches ? 5 : 90}
        pr={matches ? 5 : 69}
        pt={matches ? 50 : 100}
        style={{ zIndex: 150, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
      >
        <Title
          color="white"
          className="uppercase xs:!text-[24px] sm:!text-[32px] md:!text-[48px] font-[700] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px] tracking-[-0.015em] ml-0 xs:ml-[12px]"
          mb={50}
        >
          RECENT WINNERS
        </Title>
        <SimpleGrid
          // cols={2}
          // spacing={20}
          // breakpoints={[
          //   { maxWidth: '72rem', cols: 2, spacing: 'sm' },
          //   { maxWidth: '70rem', cols: 1, spacing: 'sm' },
          // ]}
          className="ml-0 xs:ml-[12px] mr-0 xs:mr-[12px]"
        >
          <WinnerCard title="Recent Winners" data={recentWinners} />
          {/* <WinnerCard title="Top Winners" data={topWinners} /> */}
        </SimpleGrid>
      </Container>
    </>
  );
}
