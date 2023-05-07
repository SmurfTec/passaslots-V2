import { Button, Container, Grid, Image, Text, Title, BackgroundImage } from '@mantine/core';
import { NextLink } from '@mantine/next';

export function PDProfit() {
  return (
    <BackgroundImage
      style={{
        backgroundRepeat: 'no-repeat',
        // position: 'relative',
        backgroundPosition: 'center center',
        position: 'relative',
        backgroundSize: 'cover',
        minHeight: '100vh',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
      src="/images/pages/pasa-for-distributor/bgProfit.png"
    >
      <Container fluid ml={90} mr={69} py={100}>
        <Grid m={0}>
          <Grid.Col xs={6}>
            <Image
              src="/images/pages/pasa-for-distributor/Gold_Dollar_Coins_stack.png"
              alt="Gold_Dollar_Coins_stack"
              height="auto"
              width="auto"
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <div className="relative h-full">
              <Title color="white" className="font-[700] text-[48px] leading-[51px] tracking-[0.0125em] uppercase">
                Profits with the Online
                <br /> Revolution
              </Title>
              <Text mb={50} mt={35} color="white" className="font-[400] text-[20px] leading-[38px] tracking-[0.005em]">
                Are you looking to take your gaming distribution to the next level?
                <br />
                Look no further than Pasa Online! As a distributor, you can buy
                <br />
                virtual credits with us and benefit from our ever-growing
                <br />
                platform. The more sales volumes and wider channels you have,
                <br />
                your distributor level will be higher. And the bigger your profit
                <br />
                space becomes! With the support of our top-notch app
                <br />
                development team, you'll never have to worry about a thing.
                <br />
                Become a part of our distribution network, reaching prominent
                <br />
                distributors and stores nationwide. We take the responsibility of
                <br />
                our platform seriously and will take legal action against any
                <br />
                misuse of our software.
              </Text>

              <Button
                component={NextLink}
                href="/distributor-signup"
                styles={{
                  root: {
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    padding: '17px 53px',
                    letterSpacing: '-0.015em',
                    // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                    '&:hover': {
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    },
                    fontSize: '20px',
                    lineHeight: '23px',
                    textTransform: 'uppercase',
                    height: '57px',
                    width: '278px',
                  },
                  label: {
                    marginBottom: '-2px',
                    fontSize: '20px',
                    lineHeight: '23px',
                  },
                }}
                radius={50}
                className="font-[500]"
              >
                Contact Us
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}
