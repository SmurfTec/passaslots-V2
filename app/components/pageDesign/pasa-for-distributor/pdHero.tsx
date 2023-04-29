import { BackgroundImage, Center, Container, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ScrollButton } from '@pasa/customComponents';

export function PDHero() {
  const matches = useMediaQuery('(max-width: 810px)');
  return (
    <Container size={1300}  p={matches ? 0 : undefined} m={matches ? 0 : undefined} className="xs:mt-[-90px]">
   
      {/* <BackgroundImage src="/images/pages/pasa-for-distributor/pdHeroBackground.png" className="min-h-[68vh]"></BackgroundImage> */}
      <Image src="/images/pages/pasa-for-distributor/pdHeroBackground.png" alt='hero'/>
      <Center>
      <ScrollButton pointerPosition="DOWN" className="mt-10" />
      </Center>
    </Container>
  );
}
