import { Container, Group, Title, Stack,Image } from '@mantine/core';
import { ScrollButton } from '@pasa/customComponents';

import { useMediaQuery } from '@mantine/hooks';

export function ContactHero() {
  const matches = useMediaQuery('(max-width: 810px)', true);
    return (
    <Container size={1300} className="mb-[-150px] sm:mb-[auto]  relative">
        <Stack h={matches ? "40vh" : "80vh"} justify='center'>
          <Group align='center'>
            <Title className="font-[500]" order={6}>
              Contact Us
            </Title>
            <Image src="/images/vector/heroLine.png" width={60} height={1} alt="vector" />
          </Group>
          <Title mt={30} className="font-[700] uppercase">
            More than just a platform
          </Title>
        </Stack>
      <ScrollButton pointerPosition="DOWN" className="absolute bottom-10 left-1/2" />
    </Container>
  );
}
