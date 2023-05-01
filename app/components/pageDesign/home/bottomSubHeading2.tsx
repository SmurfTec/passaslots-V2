import { Button, Container, Grid, Group, Text, Title, createStyles } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { HomeBottomCarousel } from './homebottomCarousel';

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
  },
}));

export const BottomSubHeading2 = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.backdrop}>
      <Container size={1300}>
        <Grid align={'center'} justify='center' className="space-y-5">
          <HomeBottomCarousel />
          <Grid.Col mt={20}>
            <div className="space-y-1 mt-10">
              <Title order={2} className="font-bold uppercase text-center text-[#FFFFFF]">
                Where gaming creators meet life
              </Title>
              <Title order={2} className="font-bold uppercase text-center text-[#FFFFFF]">
                long gamers
              </Title>
            </div>
            <Grid className="text-center" justify={'center'}>
              <Text className="text-center text-base font-normal mt-10 text-[#FFFFFF]" maw={600}>
                Designed by renowned software developers, and featuring incredible graphics and audio, as well as
                payout-packed symbols, no two gaming sessions will be the same, ensuring excitement at every spin.
              </Text>
            </Grid>
            <div className='text-center mx-auto'>
              <Button 
              styles={{
                root: {
                  fontSize: '16px',
                  color: 'white',
                  borderColor: '#F6CAA7',
                  '&:hover': { background: '#016BE6' },
                },
              }}
              bg={'#016BE6'} radius={50}
              mt={15} size="lg" className="text-sm font-bold mt-10 mb-20" component={NextLink} href="/distributor-signup">
                FIND OUT MORE
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
