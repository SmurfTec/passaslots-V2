import { Container, Grid, Text, Title, Button,Image } from '@mantine/core';

export function BlogDiscover() {
  return (
    <Container size={1300} pt={100}>
      <Grid align="center ">
        <Grid.Col sm={6}>
          <Title mb={20} order={3} className="font-[700]">
            DISCOVER MORE <br /> WITH PASA
          </Title>
          <Image height={270} width={300} src="/images/pages/blogs/pirate.png" alt="pirate" />
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text mt={20} color="#0F0F0F" className="font-[400] tracking-[0.005em] leading-6" size="sm">
            Experience ultimate online gaming at Pasa. Our renowned <br /> software developers bring you incredible graphics,
            dynamic <br /> audio, and payout-packed symbols for a unique and thrilling <br /> experience. We've got you covered on any
            device and in-browser <br /> with a wide range of games, including multiplayer fishing, <br /> classic slots, Roulette,
            keno, and more. Join the fun and hit <br /> the jackpot at Pasa!
          </Text>
          <div className='text-right mt-10'>
          <Button my={30} className="h-12 px-12 rounded-md text-[14px] font-[300]">READ MORE</Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
