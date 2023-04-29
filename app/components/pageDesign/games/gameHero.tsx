import { BackgroundImage, Center, Container, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ScrollButton } from '@pasa/customComponents';

export function GameHero() {
  const matches = useMediaQuery('(max-width: 810px)');
  return (
    <Container size={1300} p={matches ? 0 : undefined} m={matches ? 0 : undefined} className="xs:mt-[-90px]">
      <Image src="/images/pages/game/heroBackground.png" alt='hero'/>
      <Center>
      <ScrollButton pointerPosition="DOWN" className="mt-10" />
      </Center>
    </Container>
  );
}
