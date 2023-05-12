import { Button, Container, Grid, Text, Title, Image, createStyles, BackgroundImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useBonusModal } from '@pasa/hooks';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('/images/pages/home/casinochipsfalling.png')`,
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
    [theme.fn.smallerThan(770)]: {
      minHeight: '85vh',
    },
  },
}));

export function WinHome() {
  const [BonusModal, bonusOpen] = useBonusModal();
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 770px)', true);
  return (
    <div
      className={classes.backdrop}
      style={{ zIndex: 2, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      {!matches && (
        <Container fluid pt={94}>
          <Grid align="center">
            <Grid.Col sm={12}>
              <Image maw={644} mah={363} className="text-center mx-auto" mb={58} src="/images/pages/home/winHomeImage.png" alt="image" />
              <Title
                color={'#fff'}
                mb={29}
                order={3}
                className="font-[700] uppercase text-center"
                style={{ fontSize: '48px', letterSpacing: '-1.5%', lineHeight: '56.2px' }}
              >
                Play on any device now
              </Title>
              <Text
                mb={29}
                color="#fff"
                className="font-[400] tracking-[0.005em] font-weight text-2xl leading-6 text-center"
                size="sm"
                style={{ fontSize: '24px', letterSpacing: '-1.5%', lineHeight: '28.13px' }}
              >
                Every kind of game imaginable, a safe and secure environment <br /> to play in, and quick top-up{' '}
                <span className="font-[700]">solutions to fund your account</span> with.
              </Text>
              <div className="text-center mt-8">
                <Button
                  radius={50}
                  mb={86}
                  w={176}
                  styles={{
                    root: {
                      border: 'none',
                      background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                      // borderColor: '#F6CAA7',
                      '&:hover': {
                        background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                      },
                    },
                  }}
                  onClick={bonusOpen}
                  className="h-12 px-12 text-xl font-[500] "
                  style={{ fontSize: '20px', lineHeight: '23.44px', letterSpacing: '-1.5%', marginTop: '40px' }}
                >
                  SIGNUP
                </Button>
              </div>
            </Grid.Col>
          </Grid>
          {BonusModal}
        </Container>
      )}
      {matches && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
            textAlign: 'center',
          }}
        >
          <Image maw={644} mah={363} className="text-center mx-auto" src="/images/pages/home/winHomeImage.png" alt="image" />
          <Title
            mt={50}
            color={'#fff'}
            className="font-[700] uppercase "
            style={{ fontSize: '25px !important', letterSpacing: '-1.5%', width: '80%' }}
          >
            Play on any device now
          </Title>
          <Text
            mt={25}
            color="#fff"
            className="font-[400] tracking-[0.005em] font-weight"
            style={{ fontSize: '15px', letterSpacing: '-1.5%', lineHeight: '21.93px', width: '75%' }}
          >
            Every kind of game imaginable, a safe and secure environment to play in, and quick top-up{' '}
            <span className="font-[700]">solutions to fund your account</span> with.
          </Text>
          <div className="text-center mt-8">
            <Button
              radius={50}
              w={176}
              styles={{
                root: {
                  border: 'none',
                  background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                  // borderColor: '#F6CAA7',
                  '&:hover': {
                    background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                  },
                },
              }}
              onClick={bonusOpen}
              className="h-12 px-12 text-xl font-[500] "
              style={{ fontSize: '20px', lineHeight: '23.44px', letterSpacing: '-1.5%' }}
            >
              SIGNUP
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
