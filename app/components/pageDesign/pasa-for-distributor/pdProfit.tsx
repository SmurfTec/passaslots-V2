import { Button, Container, Grid, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export function PDProfit() {
  return (
    <Container size={1300} pt={100}>
      <Grid m={0}>
        <Grid.Col xs={6}>
          <Title order={3} className="font-[700] uppercase">
            Profits with the
            <br /> <span style={{ color: '#C1C1C1' }}>Online Revolution</span>
          </Title>

          <Image src="/images/pages/pasa-for-distributor/pirate1.png" alt="pirate" height={300} width={300} />
        </Grid.Col>
        <Grid.Col xs={6}>
            <div className='relative h-full'>
          <Text my={20} color="#0F0F0F" className="font-[400] tracking-[0.005em]" size="sm">
            Are you looking to take your gaming distribution to the next level? Look no further than Pasa Online! As a
            distributor, you can buy virtual credits with us and benefit from our ever-growing platform. The more sales
            volumes and wider channels you have, your distributor level will be higher. And the bigger your profit space
            becomes! With the support of our top-notch app development team, you'll never have to worry about a thing.
            Become a part of our distribution network, reaching prominent distributors and stores nationwide. We take
            the responsibility of our platform seriously and will take legal action against any misuse of our software.
          </Text>

          <Button component={NextLink} href='/distributor-signup' bg="#6498B4" type="submit" className="h-12 px-12 rounded-sm text-[14px] font-[400] lg:absolute lg:bottom-20">
            Contact Us
          </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
