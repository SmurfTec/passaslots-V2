import { Button, Container, Image, Text, Title } from '@mantine/core';
import { Carousel, useStylesCarousel } from '@pasa/customComponents';

const images = [
  '/images/pages/game/carousel1.png',
  '/images/pages/game/carousel2.png',
  '/images/pages/game/carousel3.png',
  '/images/pages/game/carousel4.png',
  '/images/pages/game/carousel5.png',
  '/images/pages/game/carousel6.png',
];

export function GamePossible() {
  const { classes } = useStylesCarousel();
  return (
    <Container size={1300} pt={100} pb={50}>
      <Title order={3} className="font-[700] uppercase">
        A Sea of <br /> Possibilities <br />
        <span className="text-[#751F86]">Awaits</span>
      </Title>
      <Text my={20} color="#0F0F0F" className="font-[400] tracking-[0.005em]" size="sm">
        Just like the ocean's currents, our app's games are always in motion and <br /> constantly changing, offering
        you an endless sea of choices to explore!
      </Text>

      <Image src="/images/pages/game/gamePossible.png" alt="game" my={100} />
      <Title order={3} className="font-[700] uppercase text-[#751F86]" align="center">
        FEATURED SECTION OF GAMES
      </Title>
      <Container py={80} size={1300}>
        <Carousel images={images} loop classNames={classes} delay={4000} />
      </Container>
      <div className="relative text-center">
        <Button
          px={50}
          styles={{ root: { fontSize: '16px', '&:hover': { background: 'transparent' } } }}
          size="lg"
          className="sm:absolute sm:right-0"
          variant="outline"
          component="a"
          href="http://Pasasweeps.net"
        >
          Play Now
        </Button>
      </div>
    </Container>
  );
}
