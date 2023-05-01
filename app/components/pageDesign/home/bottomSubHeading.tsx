import { Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { NextLink } from '@mantine/next';

export const BottomSubHeading = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      backgroundImage:
        'linear-gradient(to right, #1A0E37, #016BE6, #A74C9A, #84329A)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
    }}>
      <Container size={1300} py={50}>
        <Grid align="top">
          <Grid.Col sm={12}>
            <Image className='mx-auto mb-10' width={508} height={545} src="/images/pages/home/cardsfalling.png" alt='image' />
            <div className="space-y-5 text-center">
              <Title order={2} className="font-bold uppercase text-[#FFFFFF]">
                Sun, Sand, and Big<br></br> Wins Await You
              </Title>
              <Title order={2} className="font-bold uppercase text-[#FFFFFF]">
                Awaits You
              </Title>
              <Text className='text-center text-[#FFFFFF] opacity-70' size={'sm'}>
                Begin your adventure of gaming with Pasa Slots today.
              </Text>
            </div>
            <div className="text-center">
              <Button
                mt={15}
                size="lg"
                className="text-sm font-bold"
                styles={{
                  root: {
                    fontSize: '16px',
                    color: 'white',
                    '&:hover': { background: '#016BE6' },
                  },
                }}
                bg={'#016BE6'}
                radius={50}
                component={NextLink}
                href="/distributor-signup"
              >
                FIND OUT MORE
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
