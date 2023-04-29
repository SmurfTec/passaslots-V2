import { Container, Grid, Image, Text, Title } from '@mantine/core';

export function PDExperience() {
  return (
    <Container size={1300} pt={100} className='space-y-8'>
      <Title order={2}>
        Pasa distributors <br /> <span className="text-[#751F86]">experience growth</span> <br /> within their first
        month
      </Title>
      <Grid mt={50} m={0} grow gutterSm={50}>
        <Grid.Col sm={4}>
          <Image src="/images/pages/game/pirate.png" alt="pirate" />
        </Grid.Col>
        <Grid.Col sm={8}>
          <Grid m={0} align="center">
            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 max-h-full relative rounded-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  01
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-20 max-h-full rounded-xl relative max-w-lg">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  EASY TO START - Start Offering Promotional Games to You Customers Same Day.
                </Text>
              </div>
            </Grid.Col>

            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 max-h-full relative rounded-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  02
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-20 max-h-full rounded-xl relative max-w-xl">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  NO LARGE INVESTMENT REQUIRED - Contact Us Now and Get Your Agent Account Today!
                </Text>
              </div>
            </Grid.Col>

            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 max-h-full relative rounded-xl max-w-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  03
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-32 sm:h-20  rounded-xl relative max-w-2xl">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  #1 PLATFORM - Over 40 Top Performing Promotional Games created with industry leading experience.
                  Always aiming for growth and updates with your customers in mind
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <Image mt={100} src="/images/pages/pasa-for-distributor/experience.png" alt='experience' />
    </Container>
  );
}
