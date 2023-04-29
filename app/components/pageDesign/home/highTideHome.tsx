import { BackgroundImage, Button, Container, Grid, Group, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useBonusModal } from '@pasa/hooks';

export function HighTideHome() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <>
      <BackgroundImage className="" style={{ backgroundSize: 'cover' }} src="/images/pages/home/businessBackground.png">
        <Container size={1300} py={100}>
          <Grid>
            <Grid.Col xs={6}>
              <Title color="white" order={2}>
                <span className="text-[#c1aa84]">RIDE THE HIGH</span> TIDE OF <br /> LUCK
              </Title>
              <Text color="white" mt={50} className="font-[300]" size="sm">
                Pasa has everything you need to run your business smoothly. It has an insights system that takes care of
                things like keeping track of customers, giving you reports, and managing jackpots and bonuses. Plus,
                it's safe and works on all types of devices like computers, phones, tablets, and even special terminals
                you can use on the go. So no matter where you are, you'll always have everything you need!
              </Text>
            </Grid.Col>
            <Grid.Col xs={6} className="text-right">
              <Button
                px={50}
                styles={{
                  root: {
                    fontSize: '16px',
                    color: 'white',
                    '&:hover': { background: '#AE7A5D' },
                  },
                }}
                bg={'#AE7A5D'}
                size="lg"
                variant="outline"
                onClick={bonusOpen}
              >
                SIGN UP
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>
      {BonusModal}
      <Container size={1300} pt={100}>
        <Image src="/images/pages/home/homeMobile2.png" alt="home mobile" />
        <div className="text-center md:text-right">
          <Button
            my={50}
            px={50}
            styles={{
              root: {
                fontSize: '16px',
                color: 'white',
                '&:hover': { background: '#751F86' },
              },
            }}
            bg={'#751F86'}
            size="lg"
            variant="outline"
            component="a"
            href="http://Pasasweeps.net"
            uppercase
          >
            Play Now
          </Button>
        </div>
      </Container>
      <Image pt={50} src="/images/pages/home/multipleGames.png" alt="multiple games" />

      <Container size={1300} pb={50}>
        <Group position="apart" className="space-y-5">
          <div className="space-y-1">
            <Title order={2} className="font-bold uppercase mt-16 lg:mt-0 leading-snug">
              Play all day long with slots at <br /> the
              <span className="text-[#751F86]"> forefront of our industry</span> <br /> leading gaming platform
            </Title>
          </div>
          <div className="md:ml-[-120px]">
            <Text className="text-base font-normal md:mt-96" maw={350}>
              To see what kind of winnings are in store for you on the games, Pasa invites all our online and mobile
              players to launch into playing this slot sensation the moment{' '}
              <span className="font-[700]"> you've logged into your unique real money </span>
              account. You never know, one spin is all it takes to potentially change your life forever!
            </Text>
          </div>
          <div>
            <Button component={NextLink} href="games/#gameSlots" mt={15} size="lg" bg="#CC51F6" className="text-sm font-bold uppercase ">
              More on Slot Games
            </Button>
          </div>
        </Group>
      </Container>
    </>
  );
}
