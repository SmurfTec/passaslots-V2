import { Container, Grid, Text, Title, Image } from '@mantine/core';

export function GameList() {
  return (
    <Container size={1300} pb={100}>
      <Title className="uppercase" order={2}>
        Gaming just got
        <br /> <span className="text-[#C1C1C1]">better</span> for you
      </Title>

      <Grid mt={50} grow gutter="Xl">
        <Grid.Col sm={8}>
          <Grid align="center">
            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 relative rounded-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  01
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-20 rounded-xl relative max-w-md">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  Imaginative themes: Be transported to a world of out-of-this-world graphics and dynamic audio.
                </Text>
              </div>
            </Grid.Col>

            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 relative rounded-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  02
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-20 rounded-xl relative max-w-lg">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  High payout potential: Captivate yourself with the thrill of potentially life-changing winnings.
                </Text>
              </div>
            </Grid.Col>

            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 relative rounded-xl max-w-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  03
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-20 rounded-xl relative max-w-xl">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  Convenient access: Play from the comfort of your own home or on-the-go with our online and mobile
                  options
                </Text>
              </div>
            </Grid.Col>

            <Grid.Col sm={2}>
              <div className="text-center text-white bg-[#751F86] h-20 relative rounded-xl">
                <Text className="font-[700] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" size={36}>
                  04
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col sm={10}>
              <div className="text-left bg-[#323131] text-white h-20 rounded-xl relative max-w-2xl">
                <Text className="absolute px-6 top-1/2 -translate-y-1/2" size="sm" opacity={0.8}>
                  Dedicated to providing the best: Pasa is dedicated to giving you the best gaming experience possible.
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col sm={4}>
            <Image className='mt-14' src="/images/pages/game/pirate.png" alt='pirate'  />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
