import { BackgroundImage, Button, Container, Grid, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export function PDBusiness() {
  return (
    <BackgroundImage mt={100} className="" src="/images/pages/pasa-for-distributor/businessBackground.png">
      <Container size={1300} className='py-24 md:py-48'>
        <Grid m={0}>
          <Grid.Col xs={6}>
            <Title color="white" order={2}>
              Effortless Business <br /> Management with{' '}
              <span className="text-[#CAC6CB]">
                Pasa's <br /> Innovative User and Gaming <br /> Insights System
              </span>
            </Title>
            <Text color="white" mt={50} className="font-[300] uppercase" size="sm">
              Pasa has everything you need to run your business smoothly. It has an insights system that takes care of
              things like keeping track of customers, giving you reports, and managing jackpots and bonuses. Plus, it's
              safe and works on all types of devices like computers, phones, tablets, and even special terminals you can
              use on the go. So no matter where you are, you'll always have everything you need!
            </Text>
          </Grid.Col>
          <Grid.Col xs={6} className='text-right'>
            <Button
              px={50}
              styles={{ root: { fontSize: '16px', color: "white", borderColor: "white", '&:hover': { background: 'transparent' } } }}
              size="lg"
              variant="outline"
              component='a' href="http://Pasasweeps.net"
            >
              Play Now
            </Button>   
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}
