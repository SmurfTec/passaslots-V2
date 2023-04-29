import { Container, Group, Title, Stack,Image } from '@mantine/core';
import { ScrollButton } from '@pasa/customComponents';
import { useMediaQuery } from '@mantine/hooks';
export function BlogHero() {
  
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <Container size={1300} className="mb-[-50px] sm:mb-[auto]  relative ">
      {/* <div className="absolute top-1/2 -translate-y-1/2"> */}
      <Stack h={matches ? "40vh" : "80vh"} justify='center'>
        <div className="text-left">
          <Group>
            <Title className="font-[500]" order={6}>
              Blogs
            </Title>
            <Image src="/images/vector/heroLine.png" width={60} height={1} alt="vector" />
          </Group>
          <Title mt={30} className="font-[700] uppercase" order={1}>
            READ MORE ABOUT THE PASA SLOTS COMMUNITY
          </Title>
        </div>
      </Stack>
      <ScrollButton pointerPosition="DOWN" className="absolute bottom-10 left-1/2" />
    </Container>
  );
}
