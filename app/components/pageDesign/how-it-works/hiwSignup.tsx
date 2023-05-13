import { BackgroundImage, Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { useBonusModal } from '@pasa/hooks';
import { useMediaQuery } from '@mantine/hooks';

export function HiwSignup() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundRepeat: 'no-repeat',
        // position: 'relative',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        // minHeight: '130vh',
        // height: '1127px',
        position: 'relative',
        marginTop: '-115px',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69} py={matches ? 50 : 100}>
        <Grid justify="center" align="center">
          <Grid.Col sm={12}>
            <Image
              maw={562} mah={562}
              className="mx-auto my-auto"
              src="/images/pages/hiw/winnings.png"
              alt="image"
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Title
              maw={820}
              mx='auto'
              color="white"
              className="text-center uppercase font-[700] md:!text-[64px] sm:!text-[32px] xs:!text-[32px] md:!leading-[68px] sm:!leading-[34px] xs:!leading-[34px] tracking-[0.0125em]"
            >
              Get a Taste of Paradise
               with Your Wins
            </Title>
          </Grid.Col>
          <Grid.Col sm={12}>
            <Text
              opacity={0.8}
              mt={25}
              size={matches ? 15 : 20}
              color="white"
              className="text-center font-[400] md:!leading-[38px] sm:!leading-[22px] xs:!leading-[22px] tracking-[0.0125em]"
            >
              Let's make things official, ride the Waves of Good Fortune, and become adventure buddies!
            </Text>
            <Grid align="center" mt={40}>
              <Grid.Col lg={12}>
                <div className="text-center">
                  <Button
                    styles={{
                      root: {
                        border: 'none',
                        background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                        padding: '15px 53px',
                        letterSpacing: '-0.015em',
                        // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                        '&:hover': {
                          background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                        },
                        fontSize: '17px',
                      },
                      label: {
                        marginBottom: '-2px',
                        fontSize: '20px',
                        lineHeight: '23px',
                      },
                    }}
                    radius={50}
                    onClick={bonusOpen}
                    className="h-12 px-12 font-[500]"
                  >
                    UNLOCK BONUS
                  </Button>
                </div>
              </Grid.Col>
              {BonusModal}
              <Grid.Col lg={12}>
                <div className="text-left">
                  <Text className="text-center font-[400] leading-[17px] tracking-[0.005em] text-[13px]" color="white">
                    Get your sign up bonus + updates on new
                    <br /> games and VIP offers that arrive by the
                    <br /> seashore.
                  </Text>
                </div>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
