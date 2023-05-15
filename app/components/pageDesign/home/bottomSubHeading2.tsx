import { Button, Container, Grid, Group, Text, Title, createStyles } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { HomeBottomCarousel } from './homebottomCarousel';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/header/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
    [theme.fn.smallerThan(770)]: {
      minHeight: '70vh',
    },
  },
}));

export const BottomSubHeading2 = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 770px)', true);
  return (
    <div
      className={classes.backdrop}
      style={{ boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      {!matches && (
        <Container fluid ml={90} mr={69}>
          <Grid align={'center'} justify="center" className="space-y-5">
            <HomeBottomCarousel />
            <Grid.Col mt={20}>
              <div className="space-y-1 mt-10">
                <Title
                  className="font-bold uppercase xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px] text-center text-[#FFFFFF]"
                  style={{ fontWeight: '700' }}
                >
                  Where gaming creators meet life
                </Title>
                <Title
                  className="font-bold uppercase text-center text-[#FFFFFF] xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px]"
                  style={{ fontWeight: '700' }}
                >
                  long gamers
                </Title>
              </div>
              <Grid className="text-center" justify={'center'}>
                <Text
                  className="text-center xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[30px] sm:!leading-[20px] xs:!leading-[20px] font-normal mt-10 text-[#FFFFFF]"
                  maw={935}
                  style={{ fontWeight: '400' }}
                >
                  Designed by renowned software developers, and featuring incredible graphics and audio, as well as
                  payout-packed symbols, no two gaming sessions will be the same, ensuring excitement at every spin.
                </Text>
              </Grid>
              <div className="text-center mx-auto" style={{ marginBottom: '50px' }}>
                <Button
                  styles={{
                    root: {
                      fontSize: '16px',
                      color: 'white',
                      // borderColor: '#F6CAA7',
                      '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                    },
                  }}
                  bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
                  radius={50}
                  mt={15}
                  size="lg"
                  className="text-sm font-bold mt-10 mb-10"
                  component={NextLink}
                  href="/distributor-signup"
                  style={{ border: 'none', fontWeight: '500 !important', fontSize: '20px !important' }}
                >
                  FIND OUT MORE
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      )}
      {matches && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <HomeBottomCarousel />
          <Title
            className="font-bold uppercase text-center text-[#FFFFFF] xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px]"
            style={{ fontWeight: '700', width: '90%' }}
          >
            Where gaming creators meet life long gamers
          </Title>

          <Text
            className="text-center xs:!text-[15px] sm:!text-[15px] md:!text-[20px] md:!leading-[30px] sm:!leading-[20px] xs:!leading-[20px] text-base font-normal mt-10 text-[#FFFFFF]"
            style={{ fontWeight: '400', width: '90%' }}
          >
            Designed by renowned software developers, and featuring incredible graphics and audio, as well as
            payout-packed symbols, no two gaming sessions will be the same, ensuring excitement at every spin.
          </Text>
          <Button
            styles={{
              root: {
                fontSize: '16px',
                color: 'white',
                // borderColor: '#F6CAA7',
                '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
              },
            }}
            bg={'linear-gradient(to bottom, #2072D2, #A74C9A)'}
            radius={50}
            mt={50}
            mb={matches ? 70 : 100}
            size={matches ? 'sm' : 'lg'}
            className="text-sm font-bold"
            component={NextLink}
            href="/distributor-signup"
            style={{ border: 'none', fontWeight: '500 !important', fontSize: matches ? '15px' : '20px !important' }}
          >
            FIND OUT MORE
          </Button>
        </div>
      )}
    </div>
  );
};
