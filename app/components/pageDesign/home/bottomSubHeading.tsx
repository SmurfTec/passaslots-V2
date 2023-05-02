import { Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { NextLink } from '@mantine/next';

export const BottomSubHeading = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
    }}>
      <Container size={1300} py={50}>
        <Grid align="top">
          <Grid.Col sm={12}>
            <Image className='mx-auto mb-10' width={508} height={545} src="/images/pages/home/cardsfalling.png" alt='image' />
            <div className="space-y-5 text-center">
              <Title order={2} className="font-bold uppercase text-[#FFFFFF]">
                Sun, Sand, and Big Wins<br></br> Await You
              </Title>
              <Text className='text-center text-[#FFFFFF] opacity-70' size={'sm'}>
                Begin your adventure of gaming with Pasa Slots today.
              </Text>
            </div>
            <div className="text-center">
              <Button
                mt={15}
                w={150}
                size="lg"
                className="text-sm font-bold"
                styles={{
                  root: {
                    fontSize: '16px',
                    color: 'white',
                    '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                  },
                }}
                bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
                radius={50}
                component='a'
                href="http://Pasasweeps.net"
              >
                PLAY NOW
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
