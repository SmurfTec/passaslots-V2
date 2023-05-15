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
    // minHeight: '100vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
    [theme.fn.smallerThan(770)]: {
      minHeight: 'initial',
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
      <Container fluid py={matches ? 50 : 100} pl={matches ? 5 : 90} pr={matches ? 5 : 69}>
        <Grid align="center">
          <Grid.Col sm={12}>
            <Image
              maw={644}
              mah={363}
              className="text-center mx-auto"
              mb={matches ? 30 : 58}
              src="/images/pages/home/winHomeImage.png"
              alt="image"
            />
            <Title
              color={'#fff'}
              mb={matches ? 20 : 30}
              className="font-[700] uppercase text-center xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px] tracking-[-0.015em]"
            >
              Play on any device now
            </Title>
            <Text
              mb={29}
              color="#fff"
              mx='auto'
              maw={690}
              className="font-[400] tracking-[0.005em] font-weight xs:!text-[16px] sm:!text-[16px] md:!text-[24px] md:!leading-[28px] sm:!leading-[20px] xs:!leading-[20px] text-center"
            >
              Every kind of game imaginable, a safe and secure environment to play in, and quick top-up{' '}
              <span className="font-[700]">solutions to fund your account</span> with.
            </Text>
            <div className="text-center mt-8">
              <Button
                radius={50}
                mb={10}
                w={matches ? 150 : 176}
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
                style={{ fontSize: matches ? '15px' : '20px', lineHeight: '23.44px', letterSpacing: '-1.5%', marginTop: matches ? '10px' : '40px' }}
              >
                SIGNUP
              </Button>
            </div>
          </Grid.Col>
        </Grid>
        {BonusModal}
      </Container>
    </div>
  );
}
