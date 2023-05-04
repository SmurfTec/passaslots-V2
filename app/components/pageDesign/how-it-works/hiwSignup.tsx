import { BackgroundImage, Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { useBonusModal } from '@pasa/hooks';

export function HiwSignup() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
      backgroundRepeat: 'no-repeat',
      // position: 'relative',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      minHeight: '130vh', 
      // height: '1127px',
      position: 'relative',
      marginTop: '-115px',
    }}>
      <Container fluid ml={90} mr={69} className="py-16 md:py-32">
        <Grid justify='center' align='center'>
          <Grid.Col sm={12}>
            <Image w="562px !important" h="562px !important" className="mx-auto my-auto pt-[33px]" src="/images/pages/hiw/winnings.png" alt="image" />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Title color="white" className="text-center uppercase text-[64px] font-[700] leading-[68px] tracking-[0.0125em]">
              Get a Taste of Paradise<br /> with Your Wins
            </Title>
          </Grid.Col>
          <Grid.Col sm={12}>
            <Text opacity={0.8} mt={25} color="white" className="text-center font-[400] text-[20px] leading-[38px] tracking-[0.0125em]">
              Let's make things official, ride the Waves of Good Fortune, and become adventure buddies!
            </Text>
            <Grid align='center' mt={40}>
              <Grid.Col lg={12}>
                <div className='text-center'>
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
                        lineHeight: '23px'
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
                    Get your sign up bonus + updates on new<br/> games and VIP offers that arrive by the<br/> seashore.
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
