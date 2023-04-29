import { BackgroundImage, Button, Container, Grid, Text, Title } from '@mantine/core';
import { useBonusModal } from '@pasa/hooks';

export function HiwSignup() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <BackgroundImage src="/images/pages/hiw/hiwBackground.png">
      <Container size={1300} className="py-16 md:py-32">
        <Grid>
          <Grid.Col sm={6}>
            <Title color="white" className="uppercase" order={2}>
              Get a Taste of <br /> Paradise with Your <br /> Wins
            </Title>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Text opacity={0.8} mt={20} color="white" className="font-[300] tracking-[0.005em]" size="sm">
              Let's make things official, ride the Waves of Good Fortune, and become adventure <br /> buddies!
            </Text>
            <Grid mt={40}>
              <Grid.Col lg={6}>
                <Button
                  styles={{
                    root: {
                      backgroundColor: 'white',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                      },
                    },
                  }}
                  bg="white"
                  color="#303347"
                  onClick={bonusOpen}
                  className="h-12 px-12 rounded-sm text-[14px] font-[700]"
                >
                  UNLOCK BONUS
                </Button>
              </Grid.Col>
              {BonusModal}
              <Grid.Col lg={6}>
                <div className="text-left">
                  <Text size={12} className="font-[300] " color="white">
                    Get your sign up bonus + updates on new games and VIP offers that arrive by the seashore.
                  </Text>
                </div>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}
