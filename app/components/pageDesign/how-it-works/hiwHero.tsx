import { Container, Group, Stack, Text, Title, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ScrollButton } from '@pasa/customComponents';


export function HiwHero() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <Container size={1300} className="mb-[-150px] sm:mb-[auto]  relative">
      <Stack h={matches ? '40vh' : '80vh'} justify="center">
        <Group align='center'>
          <Title className="font-[500] mb-[-30px] sm:mb-0" order={6}>
            How it works?  <Image className='inline-block' ml={10} src="/images/vector/heroLine.png" width={60} height={1} alt="vector" />
          </Title>
         
        </Group>
        <Title mt={30} className="font-[700] uppercase" order={1}>
          HOW PASA WORKS
        </Title>
        <Text color="#0F0F0F" className="font-[400] tracking-[0.005em] leading-6" size="sm">
          Experience the thrill of casino gaming from the comfort of your own home
        </Text>
      </Stack>
      <ScrollButton pointerPosition="DOWN" className="absolute bottom-10 left-1/2" />
    </Container>
  );
}
