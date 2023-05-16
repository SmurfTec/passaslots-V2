import { Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useMediaQuery } from '@mantine/hooks';

export const BottomSubHeading = () => {
  const matches = useMediaQuery('(max-width: 700px)', true);
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-600"
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid ml={matches ? 2 : 90} mr={matches ? 2 : 69} py={70}>
        <Grid align="top">
          <Grid.Col sm={12}>
            <Image
              mah={545}
              maw={508}
              mih={303}
              miw={282}
              className="mx-auto mb-10"
              src="/images/pages/home/cardsfalling.png"
              alt="image"
            />
            <div className="space-y-5 text-center">
              <Title maw={360}
                className="font-bold text-center mx-auto uppercase text-[#FFFFFF] xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[51px] sm:!leading-[35px] xs:!leading-[25px]"
              >
                Sun, Sand, and Big Wins Await You
              </Title>
              <Text
                className="text-center text-[#FFFFFF] xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[30px] sm:!leading-[20px] xs:!leading-[20px]"
                style={{
                  fontWeight: '400',
                  marginTop: '30px',
                  letterSpacing: '-1.5%',
                }}
              >
                Begin your adventure of gaming with Pasa Slots today.
              </Text>
            </div>
            <div className="text-center">
              <Button
                mt={15}
                w={150}
                size={matches ? 'md' : 'lg'}
                className="text-sm"
                styles={{
                  root: {
                    fontSize: '16px',
                    color: 'white',
                    '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                  },
                }}
                bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
                radius={50}
                component="a"
                href="http://Pasasweeps.net"
                style={{ marginTop: '50px', border: 'none' }}
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
