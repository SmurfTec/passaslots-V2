import { Button, Container, Grid, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export const BottomSubHeading = () => {
  return (
    <Container size={1300}>
      <Grid align="top">
        <Grid.Col sm={6}>
          <div className="space-y-5 text-center md:text-left">
            <Title order={2} className="font-bold uppercase">
              Sun, Sand, and Big<br></br> Wins Await You
            </Title>
            <Text c="dark" size={'sm'}>
              Begin your adventure of gaming with Pasa Slots today.
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col sm={6}>
          <div className="text-center sm:text-right">
            <Button
              mt={15}
              size="lg"
              className="text-sm font-bold"
              styles={{
                root: {
                  fontSize: '16px',
                  color: 'white',
                  '&:hover': { background: '#751F86' },
                },
              }}
              bg={'#751F86'}
              component={NextLink}
              href="/distributor-signup"
            >
              FIND OUT MORE
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
