import { BackgroundImage, Button, Container, Group, Text, Title } from '@mantine/core';
export function Goal() {
  return (
    <div>
      <div>
        <BackgroundImage src="/images/pages/about/goalButtonBackground.png">
          <Container size={1300}>
            <div className="py-20 space-y-4">
              <Group position="center">
                <Button className="h-12 rounded-md text-[14px] font-[300]" bg="rgba(0, 0, 0, 0.24)">
                  🏆 Revolutionary Gaming Platform of 2023
                </Button>
                <Button className="h-12 rounded-md text-[14px] font-[300]" bg="rgba(0, 0, 0, 0.24)">
                  🎮 Curated by life-long gamers
                </Button>
                <Button className="h-12 rounded-md text-[14px] font-[300]" bg="rgba(0, 0, 0, 0.24)">
                  🌟 Memorable experience
                </Button>
              </Group>
              <Group position="center">
                <Button className="h-12 rounded-md text-[14px] font-[300]" bg="rgba(0, 0, 0, 0.24)">
                  👨‍💻 Timeless support 24/7
                </Button>
                <Button className="h-12 rounded-md text-[14px] font-[300]" bg="rgba(0, 0, 0, 0.24)">
                  🍋 Easy peasy one-click download & registration 
                </Button>
              </Group>
            </div>
          </Container>
        </BackgroundImage>
      </div>

      <div>
        <BackgroundImage className="min-h-screen relative" src="/images/pages/about/goalBackground.png">
          <div className="absolute top-1/2 md:left-1/2 left-2 right-2  md:-translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
              <Title color="white" className="font-[500] tracking-[0.005em] uppercase" order={2}>
                Our goal is to aim <br /> without a limit
              </Title>
              <Text mt={20} color="white" className="font-[300] tracking-[0.005em] leading-8" opacity={0.8} size="sm">
                Our commitment to being No.1 drives us to constantly improve. We are <br /> always broadening our
                community, enhancing our content, and finding <br /> new ways to provide value to our players.
              </Text>
              <Title color="white" mt={20} className="font-[300]" order={4}>
                Our goal is to be:
              </Title>
              <div className='space-y-0 mt-12'>
                <Title color="white" mt={20} className="font-[300]" order={3}>
                  The World's
                </Title>
                <Title color="white" mt={20} className="font-[700]" order={1}>
                  No. 1
                </Title>
                <Text color="white" className="font-[300] tracking-[0.005em]" size="md">
                  by the end of 2022 2023.
                </Text>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
}
